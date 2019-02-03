function searchImg(){
    $('#welcome').html('');
    $('#img-list').html('');
    $.ajax({
        url : 'https://pixabay.com/api/',
        dataType : 'json',
        type : 'GET',
        data : {
            'key' : '8168023-b115d677da53d332751f6c6cc',
            'q' : $('#search-input').val(),
            'image-type' : 'photo'
        },
        success : function(result){
            if (result.totalHits != 0){
                let gambar_api = result.hits;
                $.each(gambar_api, function(i,data){
                    $('#img-list').append(`
                        <div class="col-lg-3 col-md-4 col-sm-6 portfolio-item">
                            <div class="card h-10">
                            <a href="#"><img class="card-img-top" src="`+data.webformatURL+`"  width="253px" height="169px" alt=""></a>
                            <div class="card-body">
                            <p class="text-success">tags : `+data.tags+`
                                <br>Owner : `+data.user+`
                                <br>Download : <a target="_blank" rel="noopener noreferrer" href="`+data.largeImageURL+`">Cick Me..!</a>
                            </p>
                            </div>
                            </div>
                        </div>
                    `);
                });

                $('#search-input').val('');
            }else{
                $("#img-list").html(`
                    <div class='col'>
                        <h1 class="text-center">image not found!</h1>
                    </div>`
                );
            }
        }
    })  
}

$('#search-button').on('click', function(){
    searchImg();
});

$('#search-input').on('keyup', function(event){
    if (event.which === 13){
        searchImg();
    }
})

// $('#movie-list').on('click','.see-detail', function(){
//     $.ajax({
//         url : 'http://omdbapi.com',
//         dataType : 'json',
//         type : 'get',
//         data : {
//             'apikey' : '29c42c48',
//             'i' : $(this).data('id')
//         },
//         success : function(movie){
//             if(movie.Response === 'True'){
//                 $('.modal-body').html(`
//                 <div class="container-fluid">
//                     <div class="row">
//                         <div class='col-md-4'>
//                             <img src="`+movie.Poster+`" class="img-fluid">
//                         </div>
//                         <div class="col-md-8">
//                             <ul class="list-group">
//                                 <li class="list-group-item"><h3>`+movie.Title+`</h3></li>
//                                 <li class="list-group-item">Release : `+movie.Released+`</li>
//                                 <li class="list-group-item">Genre : `+movie.Genre+`</li>
//                                 <li class="list-group-item">Aktors : `+movie.Actors+`</li>
//                                 <li class="list-group-item">Director : `+movie.Director+`</li>
//                             </ul>
//                         </div>
//                     </div>
//                 </div>
//                 `);
//             }
//         }
//     });
// });

//test