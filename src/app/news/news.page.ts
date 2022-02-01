import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {
data:any;
  constructor(private newsService:NewsService, private router:Router) { }

  ngOnInit() {
    this.newsService.getData('top-headlines?country=in').subscribe(data=>{
      console.log(data);
      this.data=data;
    })
  }

  Currentarticle(article){
    debugger;
    this.newsService.currentarticle=article;
    this.router.navigate(['/news-single']);
    // this.newsService.currentarticle=this.a;
  }
}
