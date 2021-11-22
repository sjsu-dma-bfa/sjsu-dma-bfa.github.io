let nac_artwork_grid = document.getElementById("nac_artwork_grid");

function inject_nac_covers() {
    let nac_artwork_grid_a = nac_artwork_grid.getElementsByTagName("a");

    if(nac_artwork_grid_a != null) {
        if(nac_artwork_grid_a.length > 0) {
            for(i = 0; i < nac_artwork_grid_a.length; i++) {
                let nac_currentartwork = nac_artwork_grid_a[i];
                let nac_currenta_cover = nac_currentartwork.dataset.cover;
                // console.log(nac_currenta_cover);

                if(nac_currenta_cover != null && nac_currenta_cover != "") {
                    nac_currentartwork.style.backgroundImage = "url(" + nac_currenta_cover + ")";
                } else {

                }
            }
        }
    }
}

if(nac_artwork_grid != null) {
    console.log("Proxyverse: Injecting Covers...");
    inject_nac_covers();
}