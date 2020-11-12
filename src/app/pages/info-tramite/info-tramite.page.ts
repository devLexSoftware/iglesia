import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { AngularFirestore } from "@angular/fire/firestore";

@Component({
  selector: "app-info-tramite",
  templateUrl: "./info-tramite.page.html",
  styleUrls: ["./info-tramite.page.scss"],
})
export class InfoTramitePage implements OnInit {
  tramite = {
    titulo: "",
    requisitos: [],
    pasos: "",
  };

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private anFS: AngularFirestore
  ) {}

  ngOnInit() {
    let id = this.activatedRoute.snapshot.paramMap.get("id");
    console.log(id);
    this.anFS
      .collection("tramites")
      .doc(id)
      .get()
      .subscribe((data: any) => {
        this.tramite = data.data();
        console.log(this.tramite);
      });
  }

  back() {
    this.router.navigateByUrl(`/tabs/tab2`);
  }
}
