//selecting all required elements
const filterItem = document.querySelector(".items");
const filterGallery = document.querySelectorAll(".gallery .gallery-box");
console.log(filterItem, filterGallery)

window.onload = () => { //after window loaded
    filterItem.onclick = (selectedItem) => { //if user click on filterItem div
        if (selectedItem.target.classList.contains("item")) { //if user selected item has .item class
            filterItem.querySelector(".active").classList.remove("active"); //remove the active class which is in first item
            selectedItem.target.classList.add("active"); //add that active class on user selected item
            let filterName = selectedItem.target.getAttribute("data-name"); //getting data-name value of user selected item and store in a filtername variable
            filterGallery.forEach((galleryBox) => {
                let filterBoxes = galleryBox.getAttribute("data-name"); //getting galleryBox data-name value
                //if user selected item data-name value is equal to galleryBoxs data-name value
                //or user selected item data-name value is equal to "all"
                if ((filterBoxes == filterName) || (filterName == "all")) {
                    galleryBox.classList.remove("hide"); //first remove the hide class from the galleryBox
                    galleryBox.classList.add("show"); //add show class in galleryBox
                } else {
                    galleryBox.classList.add("hide"); //add hide class in galleryBox
                    galleryBox.classList.remove("show"); //remove show class from the galleryBox
                }
            });
        }
    }
    for (let i = 0; i < filterGallery.length; i++) {
        filterGallery[i].setAttribute("onclick", "preview(this)"); //adding onclick attribute in all available galleryBoxs
    }
}