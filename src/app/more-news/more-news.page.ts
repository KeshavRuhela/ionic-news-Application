import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-more-news',
  templateUrl: './more-news.page.html',
  styleUrls: ['./more-news.page.scss'],
})
export class MoreNewsPage implements OnInit {
  hello:any;
  hello2:any;
  hello4:any;
  
  constructor(private newsServise:NewsService, private router:Router) {  }

  ngOnInit() {
    this.newsServise.get2Data('top-headlines?country=in&category=technology').subscribe(data=>{
      
      // debugger;
      this.hello=data;   
      console.log(this.hello);
      this.newsServise.get3Data('top-headlines?country=in&category=health').subscribe(data2=>{
        this.hello2=data2;
        console.log(this.hello2);
        this.newsServise.get4Data('top-headlines?sources=google-news-in').subscribe(data4=>{
          this.hello4=data4;
          console.log(this.hello4);

        })
      })

    })
  }
  // ngOnInit2() {
  //   this.newsServise.getData('top-headlines?country=in&category=sports').subscribe(data2=>{
  //     this.hello2=data2;   
  //     console.log(this.hello2);
  //   })
  // }
  Currentarticle(article){
    this.newsServise.currentarticle=article;
    this.router.navigate(['/tab2']);
    // this.newsService.currentarticle=this.a;
  }
}
