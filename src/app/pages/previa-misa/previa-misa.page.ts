import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { AngularFirestore } from "@angular/fire/firestore";

@Component({
  selector: "app-previa-misa",
  templateUrl: "./previa-misa.page.html",
  styleUrls: ["./previa-misa.page.scss"],
})
export class PreviaMisaPage implements OnInit {
  misa = {
    link: "",
    titulo: "",
    texto: "",
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
      .collection("misas")
      .doc(id)
      .get()
      .subscribe((data: any) => {
        this.misa = data.data();
      });
  }

  back() {
    this.router.navigateByUrl(`/tabs/misa`);
  }
}
