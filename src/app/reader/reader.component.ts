import { Component, OnInit } from "@angular/core";
import { metadata } from "app/libs/fnm.metadata";
import { rowMetadata, sampleFNM } from "app/libs/fnmJSON.metadata";
import { Loan } from "app/dataExtractor/loan";
import { LoanMetadata } from "app/dataExtractor/metadata";
import { convert } from "app/helpers/xmlConvertor";

@Component({
  selector: "fnm-reader",
  templateUrl: "reader.component.html",
  styleUrls: ["./reader.component.css"]
})
export class ReaderComponent implements OnInit {
  fileContent: string = "";
  file: File;
  fnmMetadata: any[] = metadata;
  data: any[];
  stringarr: string[] = [];
  loan: Loan = null;
  loanMetadata: LoanMetadata;
  constructor() { }

  ngOnInit() {
    this.loanMetadata = new LoanMetadata();
    var fileInput = document.getElementById("fileInput") as HTMLInputElement;
    var fileDisplayArea = document.getElementById("fileDisplayArea");
    //this.fileContent = sampleFNM;
    //this.processFNMContent();
    fileInput.addEventListener("change", e => {
      this.file = fileInput.files[0];
      var textType = /text.*/;

      if (this.file.type.match(textType) || this.file.type == "") {
        var reader = new FileReader();

        reader.onload = e => {
          //  fileDisplayArea.innerText = reader.result;
          this.fileContent = reader.result;
          this.processFNMContent();
        };

        reader.readAsText(this.file);
      } else {
        fileDisplayArea.innerText = "File not supported!";
      }
    });
    let groupIds: any[] = [];
    this.fnmMetadata.filter(t => t.Position == "1").forEach(t => {
      if (t.DataStream)
        groupIds.push({ FieldGroupID: t.DataStream, Description: t.Field });
    });
    // console.log(JSON.stringify(groupIds));
    var wrap = (document.onscroll = e => {
      if (e.target["scrollingElement"].scrollTop > 100) {
        document.body.classList.add("on-scroll");
      } else {
        document.body.classList.remove("on-scroll");
      }
    });
  }
  processFNMContent() {
    this.stringarr = this.fileContent.split("\n");
    let data = [];
    rowMetadata.forEach(t => {
      let dd = {
        FieldGroupID: t["FieldGroupID"],
        Rows: [],
        Title: t.Description
      };
      this.stringarr.forEach(element => {
        if (element.indexOf(t["FieldGroupID"]) == 0) dd.Rows.push(element);
      });
      data.push(dd);
    });
    this.loan = new Loan(this.stringarr);
    setTimeout(t => {
      const ss = this.loan;
      console.log(JSON.stringify(ss));
      let ddd: string = convert(ss, "Loan");
      console.log("XML document");
      console.log(ddd);
      let fnmString: string = this.loan.toFNMString();
      console.log("ReverseFNM String");
      console.log(fnmString);
    }, 0);
    

    this.data = data.filter(t => t.Rows.length > 0);
  }
}
