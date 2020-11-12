import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { AngularFirestore } from "@angular/fire/firestore";

@Component({
  selector: "app-previa-misal",
  templateUrl: "./previa-misal.page.html",
  styleUrls: ["./previa-misal.page.scss"],
})
export class PreviaMisalPage implements OnInit {
  misal = {
    link: "",
    titulo: "",
    texto: "",
    leccionario: "",
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
      .collection("misales")
      .doc(id)
      .get()
      .subscribe((data: any) => {
        this.misal = data.data();
      });
  }

  back() {
    this.router.navigateByUrl(`/tabs/misal`);
  }
}
