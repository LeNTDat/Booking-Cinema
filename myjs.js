// Scroll window show navbar
$(document).ready(function () {
    $(window).scroll(function () {
        const scroll = document.documentElement.scrollTop;
        if (scroll > 101) {
            $('header').addClass('header-active');
        } else {
            $('header').removeClass('header-active');
        }
    });
});

// load film image
// var img_src = ["https://www.cgv.vn/media/catalog/product/cache/1/small_image/240x388/dd828b13b1cb77667d034d5f59a82eb6/p/o/poster_tenet_13_1.jpg", "https://www.cgv.vn/media/catalog/product/cache/1/small_image/240x388/dd828b13b1cb77667d034d5f59a82eb6/p/o/poster_tenet_13_1.jpg", "https://www.cgv.vn/media/catalog/product/cache/1/small_image/240x388/dd828b13b1cb77667d034d5f59a82eb6/p/o/poster_hvqv_5_final_1__1.jpg", "https://www.cgv.vn/media/catalog/product/cache/1/small_image/240x388/dd828b13b1cb77667d034d5f59a82eb6/s/o/social-poster-kcnd_1.jpg", "https://www.cgv.vn/media/catalog/product/cache/1/small_image/240x388/dd828b13b1cb77667d034d5f59a82eb6/p/o/poster_rogue_2_1__1.jpg", "https://www.cgv.vn/media/catalog/product/cache/1/small_image/240x388/dd828b13b1cb77667d034d5f59a82eb6/p/o/poster_1_5.jpg", "https://www.cgv.vn/media/catalog/product/cache/1/small_image/240x388/dd828b13b1cb77667d034d5f59a82eb6/m/y/my-love_poster_1__1.jpg", "https://www.cgv.vn/media/catalog/product/cache/1/small_image/240x388/dd828b13b1cb77667d034d5f59a82eb6/m/a/main-poster_ms1_1.jpg", "https://www.cgv.vn/media/catalog/product/cache/1/small_image/240x388/dd828b13b1cb77667d034d5f59a82eb6/p/o/poster_peninsula_1.jpg"]
// var movie_data = [{ "id": 0, "name": "TENET", "src": "https://www.cgv.vn/media/catalog/product/cache/1/small_image/240x388/dd828b13b1cb77667d034d5f59a82eb6/p/o/poster_tenet_13_1.jpg" }, { "id": 1, "name": "TENET", "src": "https://www.cgv.vn/media/catalog/product/cache/1/small_image/240x388/dd828b13b1cb77667d034d5f59a82eb6/p/o/poster_tenet_13_1.jpg" }, { "id": 2, "name": "HỌC VIỆN QUÁI VẬT: DU HỌC SINH", "src": "https://www.cgv.vn/media/catalog/product/cache/1/small_image/240x388/dd828b13b1cb77667d034d5f59a82eb6/p/o/poster_hvqv_5_final_1__1.jpg" }, { "id": 3, "name": "KẺ CẮP NHÂN DẠNG", "src": "https://www.cgv.vn/media/catalog/product/cache/1/small_image/240x388/dd828b13b1cb77667d034d5f59a82eb6/s/o/social-poster-kcnd_1.jpg" }, { "id": 4, "name": "BIỆT ĐỘI SĂN MỒI", "src": "https://www.cgv.vn/media/catalog/product/cache/1/small_image/240x388/dd828b13b1cb77667d034d5f59a82eb6/p/o/poster_rogue_2_1__1.jpg" }, { "id": 5, "name": "HẦM QUỶ ", "src": "https://www.cgv.vn/media/catalog/product/cache/1/small_image/240x388/dd828b13b1cb77667d034d5f59a82eb6/p/o/poster_1_5.jpg" }, { "id": 6, "name": "MÌNH ƠI, XIN ĐỪNG QUA SÔNG!", "src": "https://www.cgv.vn/media/catalog/product/cache/1/small_image/240x388/dd828b13b1cb77667d034d5f59a82eb6/m/y/my-love_poster_1__1.jpg" }, { "id": 7, "name": "ĐIỆP VIÊN SIÊU LẦY ", "src": "https://www.cgv.vn/media/catalog/product/cache/1/small_image/240x388/dd828b13b1cb77667d034d5f59a82eb6/m/a/main-poster_ms1_1.jpg" }, { "id": 8, "name": "BÁN ĐẢO PENINSULA", "src": "https://www.cgv.vn/media/catalog/product/cache/1/small_image/240x388/dd828b13b1cb77667d034d5f59a82eb6/p/o/poster_peninsula_1.jpg" }]

var movie_data = [];
//call to server mockup api
function getDataMovies() {
    //fetch data
    // fetch('https://60095ff20a54690017fc31cc.mockapi.io/api/movies')
    //     .then((res) => {
    //         return res.json();
    //     })
    //     .then((data) => {
    //         console.log(data)
    //     })
    //     .catch((err) => {
    //         console.log(err)
    //     })
    $.ajax("https://60095ff20a54690017fc31cc.mockapi.io/api/movies", {
        success: (data) => {
            $('#movie-loading').hide();
            movie_data = data;
            renderUI();
            console.log('data', data)
        },
        error: (err) => {
            console.log('error', err);
        }
    })
}

//render UI
function renderUI() {
    movie_data.forEach(function (movie) {
        $('.movie-theme').append(`
        <div class='item' id =${movie.id}>
        <div class="card" >
        <img style="height:280px"
        class="card-img-top"
        src="${movie.src}" 
        alt="${movie.name}"
        onclick = "showinfo(event)"
        >
        </div>
        </div>            
        `)
    });

    // owl carousel
    $('.movie-theme').owlCarousel({
        loop: true,
        margin: 0,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        }
    })

}



getDataMovies();

const dropdown_value = $('.dropdown  .dropdown-value');
const dropdown_menu = $('.dropdown .dropdown-menu');
const slot_date = $('#slot-date');

function generateDropDownItem(value) {
    return `  <a class="dropdown-item" href="#">${value}</a>`;
}

function showinfo(event) {
    const movie_name = event.target.alt;
    const id = $(event.target).parent().parent()[0].id;
    $("#title h3").text(movie_name);

    const selected_movie = movie_data.find((movie) => {
        return (movie.id == id);
    });

    const slots = selected_movie.slot;
    dropdown_value.text('');
    slot_date.text('');
    slot_date.text(moment(slots[0]).format("ddd MMM DD YYYY"));
    dropdown_value.text(moment(slots[0]).format("hh:mm A"));
    dropdown_menu.empty();
    slots.forEach((time) => {
        dropdown_menu.append(generateDropDownItem(moment(time).format("hh:mm A")));
    })
    console.log(selected_movie, slots);
}



