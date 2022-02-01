import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-news-single',
  templateUrl: './news-single.page.html',
  styleUrls: ['./news-single.page.scss'],
})
export class NewsSinglePage implements OnInit {
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
