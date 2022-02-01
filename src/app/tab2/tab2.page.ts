import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  finalArticle:any;
  constructor(private newsService:NewsService, private router:Router) { }

  ngOnInit() {
    this.finalArticle=this.newsService.currentarticle;
    console.log(this.newsService.currentarticle)
  }
  Home(){
    this.router.navigate(['/Tabs']);
  }
}
