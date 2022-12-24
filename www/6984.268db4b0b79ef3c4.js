"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[6984],{6984:(k,d,a)=>{a.r(d),a.d(d,{YourFeedbackPageModule:()=>O});var l=a(9808),r=a(4182),s=a(2159),g=a(127),f=a(2654),c=a(3577);class b{constructor(t){this.id=t.id||"",this.name=t.name||"",this.label=t.label||"",this.type=t.type||"",this.isRequired=t.isRequired||0,this.options=JSON.parse(t.options)||[]}}var e=a(9863),p=a(7859);function v(i,t){if(1&i&&(e.TgZ(0,"option",13),e._uU(1),e.qZA()),2&i){const o=t.$implicit;e.s9C("value",o.uuid),e.xp6(1),e.hij(" ",o.name," ")}}function h(i,t){if(1&i&&e._UZ(0,"ion-input",19),2&i){const o=e.oxw().$implicit;e.s9C("formControlName",o.name)}}function F(i,t){if(1&i&&e._UZ(0,"ion-textarea",19),2&i){const o=e.oxw().$implicit;e.s9C("formControlName",o.name)}}function _(i,t){if(1&i&&(e.TgZ(0,"ion-item",22),e._UZ(1,"ion-radio",13),e.TgZ(2,"ion-label",23),e._uU(3),e.qZA()()),2&i){const o=t.$implicit;e.xp6(1),e.s9C("value",o.value),e.xp6(2),e.Oqu(o.label)}}function P(i,t){if(1&i&&(e.TgZ(0,"ion-radio-group",20),e.YNc(1,_,4,2,"ion-item",21),e.qZA()),2&i){const o=e.oxw().$implicit;e.s9C("formControlName",o.name),e.xp6(1),e.Q6J("ngForOf",o.options)}}function w(i,t){if(1&i&&e._UZ(0,"app-star-rating",24),2&i){const o=e.oxw(),n=o.$implicit,u=o.index,m=e.oxw();e.Q6J("name",n.name)("inputForm",m.reviewForm.get("review").at(u))}}function Y(i,t){if(1&i&&(e.TgZ(0,"ion-col",14)(1,"label",15),e._uU(2),e.qZA(),e.YNc(3,h,1,1,"ion-input",16),e.YNc(4,F,1,1,"ion-textarea",16),e.YNc(5,P,2,2,"ion-radio-group",17),e.YNc(6,w,1,2,"app-star-rating",18),e.qZA()),2&i){const o=t.$implicit;e.s9C("formGroupName",t.index),e.xp6(1),e.ekj("required",o.isRequired),e.xp6(1),e.Oqu(o.label),e.xp6(1),e.Q6J("ngIf","TEXT"==o.type),e.xp6(1),e.Q6J("ngIf","TEXTAREA"==o.type),e.xp6(1),e.Q6J("ngIf","RADIO"==o.type),e.xp6(1),e.Q6J("ngIf","STAR"==o.type)}}const C=[{path:"",component:(()=>{class i{constructor(o,n,u,m,Z){this.questionService=o,this.formBuilder=n,this.toastr=u,this.reviewService=m,this.userService=Z,this.subscriptions=new f.w,this.loading=!1,this.menus=[{name:"Your Feedback",class:"active"}]}ngOnInit(){this.buildForm(),this.getUserList(),this.getReviewQuestions()}buildForm(){this.reviewForm=this.formBuilder.group({user_id:["",[r.kI.required]],review:this.formBuilder.array([])})}reviewFields(){return this.reviewForm.get("review")}getUserList(){this.subscriptions.add(this.userService.getUsers().subscribe(o=>{this.users=o.data}))}getReviewQuestions(){this.subscriptions.add(this.questionService.getQuestions().subscribe(o=>{this.questions=o.data,this.questions.filter((n,u)=>{this.questions[u]=new b(n)}),this.addFieldsToForm()}))}addFieldsToForm(){this.questions.forEach(o=>{const n={};n[o.name]=["",o.isRequired?[r.kI.required]:[]],this.reviewFields().push(this.formBuilder.group(n))})}submitReview(){this.reviewForm.invalid?this.toastr.basic("All the fields are required. Please check and populate all the items!!","warning"):(this.loading=!0,this.reviewService.saveUserReview(this.reviewForm.value).subscribe(o=>{this.reviewForm.reset(),this.toastr.basic("Your review submitted Successfully!!!"),this.loading=!1},o=>{this.toastr.basic(o.statusText,"warning"),this.loading=!1}))}ngOnDestroy(){this.subscriptions.unsubscribe()}}return i.\u0275fac=function(o){return new(o||i)(e.Y36(c.qJ),e.Y36(r.qu),e.Y36(c._W),e.Y36(c.Pj),e.Y36(c.KD))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-your-feedback"]],decls:21,vars:5,consts:[[1,"ion-padding"],[1,"m-t-4"],[3,"menus"],[1,"user-review",3,"formGroup","ngSubmit"],["size-md","4"],[1,"form-floating"],["id","floatingSelect","aria-label","Floating label select example","formControlName","user_id",1,"form-select"],[3,"value",4,"ngFor","ngForOf"],["for","floatingSelect",1,"required"],["formArrayName","review",1,"m-t-2","m-b-2"],["class","form-star-input","size","12",3,"formGroupName",4,"ngFor","ngForOf"],["size","12","size-sm","3"],["expand","full","type","submit",3,"disabled"],[3,"value"],["size","12",1,"form-star-input",3,"formGroupName"],[1,"form-label"],[3,"formControlName",4,"ngIf"],["value","custom-checked",3,"formControlName",4,"ngIf"],[3,"name","inputForm",4,"ngIf"],[3,"formControlName"],["value","custom-checked",3,"formControlName"],["class","custom-radio-btn","lines","none",4,"ngFor","ngForOf"],["lines","none",1,"custom-radio-btn"],[1,"pd-left-1"],[3,"name","inputForm"]],template:function(o,n){1&o&&(e.TgZ(0,"ion-content",0)(1,"ion-grid",1),e._UZ(2,"app-breadcrumb",2),e.TgZ(3,"ion-row")(4,"ion-col")(5,"form",3),e.NdJ("ngSubmit",function(){return n.submitReview()}),e.TgZ(6,"h2"),e._uU(7,"Please select colleague and give your feedback"),e.qZA(),e.TgZ(8,"ion-row")(9,"ion-col",4)(10,"div",5)(11,"select",6),e.YNc(12,v,2,2,"option",7),e.qZA(),e.TgZ(13,"label",8),e._uU(14,"Select Colleague"),e.qZA()()()(),e.TgZ(15,"ion-row",9),e.YNc(16,Y,7,8,"ion-col",10),e.qZA(),e.TgZ(17,"ion-row")(18,"ion-col",11)(19,"ion-button",12),e._uU(20,"Submit"),e.qZA()()()()()()()()),2&o&&(e.xp6(2),e.Q6J("menus",n.menus),e.xp6(3),e.Q6J("formGroup",n.reviewForm),e.xp6(7),e.Q6J("ngForOf",n.users),e.xp6(4),e.Q6J("ngForOf",n.questions),e.xp6(3),e.Q6J("disabled",n.loading))},directives:[s.W2,s.jY,p.LI,s.Nd,s.wI,r._Y,r.JL,r.sg,r.EJ,r.JJ,r.u,l.sg,r.YN,r.Kr,r.CE,r.x0,l.O5,s.pK,s.j9,s.g2,s.se,s.QI,s.Ie,s.B7,s.U5,s.Q$,p.Te,s.YG],styles:['.pd-left-1[_ngcontent-%COMP%]{padding-left:.5rem}.required[_ngcontent-%COMP%]:after{content:" *";color:red}.user-review[_ngcontent-%COMP%]   .form-star-input[_ngcontent-%COMP%]{margin-bottom:1rem}.user-review[_ngcontent-%COMP%]   .form-star-input[_ngcontent-%COMP%]   .form-label[_ngcontent-%COMP%]{display:block}.user-review[_ngcontent-%COMP%]   ion-radio-group[_ngcontent-%COMP%]{display:block}.user-review[_ngcontent-%COMP%]   ion-radio-group[_ngcontent-%COMP%]   .custom-radio-btn[_ngcontent-%COMP%]{display:inline-block}.user-review[_ngcontent-%COMP%]   ion-textarea[_ngcontent-%COMP%], .user-review[_ngcontent-%COMP%]   ion-input[_ngcontent-%COMP%]{border:1px solid #ced4da;border-radius:.375rem}']}),i})()}];let x=(()=>{class i{}return i.\u0275fac=function(o){return new(o||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[[g.Bz.forChild(C)],g.Bz]}),i})();var T=a(7205);let O=(()=>{class i{}return i.\u0275fac=function(o){return new(o||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[[l.ez,r.u5,s.Pc,r.UX,x,T.m]]}),i})()}}]);