$(document).ready(() => {
        //=============== DISPLAY ALL ACTIVITIES =================
        (() => {
              let all_activities = [] , btn_id = 0;
              $.ajax({
                      dataType : 'json',
                      url : 'http://127.0.0.1:8081/all_activities',
                      success : (activities) => {
                              for (let activity of activities){
                                  all_activities.push(activity.name);
                                  $('.activity-container').append(
                                        '<fieldset class="activity">'
                                              +'<h3 align="center">'+activity.name+'</h3>'
                                              +'<hr>'
                                              +'<img src="'+activity.image+'width="" height="200px" alt="Activity image">'
                                              +'<hr><br>'
                                              +'&nbsp; Reviews ('+activity.rating.length+') <button type="button" data-btn-id="'+(btn_id += 1)+'"name="button" class="rating">More&nbsp;<i class="fa fa-caret-down"></i></button>'
                                        +'</fieldset>'
                                 );
                                 $('#activities').append('<option value="'+activity.name+'"></option>');
                              }

                              //================== FILTERING BY CATERGORY ================

                              var $radios = $('input[type="radio"]');
                              $radios.change(() => {
                                      $filtered =  $radios.filter(':checked').val();
                                      $('input[value~="Canal Cruise"]').parent().hide();
                                      console.log($filtered);
                              });

                        // ================= DISPLAY RATING DETAILS ====================

                            $('.rating').on('click' , ()=>{

                            });
                      }
              });
        })();
});
