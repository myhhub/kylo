import {FormGroup} from "@angular/forms";
import {Component, EventEmitter, Input, OnInit, Output, ViewChild, ViewContainerRef} from "@angular/core";
import {Feed} from "../../../../../../model/feed/feed.model";
import {DefineFeedService} from "../../../../services/define-feed.service";
import {AbstractFeedInfoItemComponent} from "../abstract-feed-info-item.component";
import {FeedItemInfoService} from "../feed-item-info.service";
import {FeedLoadingService} from "../../../../services/feed-loading-service";

@Component({
    selector:"feed-info-category",
    templateUrl:"js/feed-mgr/feeds/define-feed-ng2/summary/setup-guide-summary/feed-info/feed-info-category/feed-info-category.component.html"
})
export class FeedInfoCategoryComponent extends AbstractFeedInfoItemComponent  implements OnInit{

    constructor( defineFeedService:DefineFeedService,  feedItemInfoService:FeedItemInfoService, feedLoadingService:FeedLoadingService){
        super(defineFeedService,feedItemInfoService, feedLoadingService)
    }

    ngOnInit(){

    }

    onSaveSuccess(){
        this.hideProgress();
        this.cancel();
    }
    save(){
        this.showProgress();
        let values = this.formGroup.value;
        this.feed.category = values.category;
        this.saveFeed(this.feed);
    }

    cancel(){
        this.formGroup.reset({"category": this.feed.category});
    }

}