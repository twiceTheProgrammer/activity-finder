$(document).ready(function(){
        //======================= CAPETOWN TEASER SLIDER =================
          // 
          // var myIndex = 0;
          // carousel();
          //
          // function carousel() {
          //     var i;
          //     var x = document.getElementsByClassName("slide-show");
          //     for (i = 0; i < x.length; i++) {
          //        x[i].style.display = "none";
          //     }
          //     myIndex++;
          //     if (myIndex > x.length) {myIndex = 1}
          //     x[myIndex-1].style.display = "block";
          //     setTimeout(carousel, 2000);
          // }


        //=============== DISPLAY ALL ACTIVITIES =================
        (function(){
              $.ajax({
                      dataType : 'json',
                      url : 'http://127.0.0.1:8081/all_activities',
                      success : function(activities){

                              for (let activity of activities){
                                  $('.activity').append(
                                              '<h3 class="display-6" align="center">'+activity.name+'</h3>'
                                              +'<hr>'
                                              +'<p name="description">'+activity.description+'</p>'
                                              +'<ul>'
                                                    +'<li name="location">Location : '+activity.location+'</li>'
                                                    +'<li name="duration">Duration : '+activity.duration+' hours</li>'
                                                    +'<li name="cost">Cost : R '+activity.cost+'</li>'
                                              +'</ul><hr>'
                                              +'<p name="rating">Rating&nbsp;    <span class="fa fa-star checked" style="font-size: 15px;color : orange;"></span><p>'
                                              +'<input type="submit" value="Book"  style="float:right;border-radius: 15px; width:50%; background-color: #f1f1f1;"><br><br>'
                                  );
                              }
                      }
              });
        })();
});
