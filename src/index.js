

$(function () {
    const allGalleryCards = Array.from(document.querySelectorAll(".gallery__window__box"))
    const btnGalleryAll = document.querySelector('#btnAll')
    const btnGalleryWeb = document.querySelector('#btnWebDesign')
    const btnGalleryGraphic = document.querySelector('#btnGraphicDesign')
    const btnGalleryIllustrator = document.querySelector('#btnIllustrator')
    const btnGalleryPhoto = document.querySelector('#btnPhotography')
    const allGalleryBtns = Array.from(document.querySelectorAll(".gallery__filter__btn"))





    const changeToGalleryAll = (e) => {
        let id = e.target.textContent

        allGalleryCards.forEach(el => {
            el.style.display = 'block'
        })

        allGalleryBtns.forEach(el => {
            el.style.background = '#ebebeb'
            el.style.color = 'black'
        })

        btnGalleryAll.style.background = '#3f51b5'
        btnGalleryAll.style.color = '#fff'

    }

    const changeToGalleryWeb = (e) => {
        let id = e.target.textContent

        let notMatch = []
        notMatch = allGalleryCards.filter(el => {
            if (el.querySelector(".gallery__window__box__desc").textContent !== id) {
                return el
            }
        });

        allGalleryCards.forEach(el => {
            el.style.display = 'block'
        })
        notMatch.forEach(el => {
            el.style.display = 'none'
        })

        allGalleryBtns.forEach(el => {
            el.style.background = '#ebebeb'
            el.style.color = 'black'

        })

        btnGalleryWeb.style.background = '#3f51b5'
        btnGalleryWeb.style.color = '#fff'


    }

    const changeToGalleryGraphic = (e) => {
        let id = e.target.textContent

        let notMatch = []
        notMatch = allGalleryCards.filter(el => {
            if (el.querySelector(".gallery__window__box__desc").textContent !== id) {
                return el
            }
        });

        allGalleryCards.forEach(el => {
            el.style.display = 'block'
        })
        notMatch.forEach(el => {
            el.style.display = 'none'
        })

        allGalleryBtns.forEach(el => {
            el.style.background = '#ebebeb'
            el.style.color = 'black'
        })

        btnGalleryGraphic.style.background = '#3f51b5'
        btnGalleryGraphic.style.color = '#fff'

    }

    const changeToGalleryIllustrator = (e) => {
        let id = e.target.textContent

        let notMatch = []
        notMatch = allGalleryCards.filter(el => {
            if (el.querySelector(".gallery__window__box__desc").textContent !== id) {
                return el
            }
        });

        allGalleryCards.forEach(el => {
            el.style.display = 'block'
        })
        notMatch.forEach(el => {
            el.style.display = 'none'
        })

        allGalleryBtns.forEach(el => {
            el.style.background = '#ebebeb'
            el.style.color = 'black'
        })

        btnGalleryIllustrator.style.background = '#3f51b5'
        btnGalleryIllustrator.style.color = '#fff'

    }

    const changeToGalleryPhoto = (e) => {
        let id = e.target.textContent

        let notMatch = []
        notMatch = allGalleryCards.filter(el => {
            if (el.querySelector(".gallery__window__box__desc").textContent !== id) {
                return el
            }
        });

        allGalleryCards.forEach(el => {
            el.style.display = 'block'
        })
        notMatch.forEach(el => {
            el.style.display = 'none'
        })

        allGalleryBtns.forEach(el => {
            el.style.background = '#ebebeb'
            el.style.color = 'black'
        })

        btnGalleryPhoto.style.background = '#3f51b5'
        btnGalleryPhoto.style.color = '#fff'

    }


    $("#btnAll").on('click', changeToGalleryAll)
    $("#btnWebDesign").on('click', changeToGalleryWeb)
    $("#btnGraphicDesign").on('click', changeToGalleryGraphic)
    $("#btnIllustrator").on('click', changeToGalleryIllustrator)
    $("#btnPhotography").on('click', changeToGalleryPhoto)


    $('[data-toggle]').on("click", function (e) {
        e.preventDefault();
        let dataValue = $(this).data('toggle')
        let newDataValue = $(`[data-${dataValue}]`)
        newDataValue.toggleClass(`${dataValue}__hide`)


    })
    let allTabSwitchers = $(".tabContent")

    allTabSwitchers.hide();

    $(".profileTab--about, .sidebar--activity").show()


    $('[data-switch]').on("click", function (e) {
        e.preventDefault();
        let dataValue = $(this).data('switch')
        let newDataValue = $(`[data-${dataValue}]`)
        let dataType = $(this).data('type')
        // let dataTypeSelector = $(`[data-type='${dataType}']`)
        let contentSelect = $(`.tabContent[data-${dataType}]`)
        let boldLine = $(`.bold-line[data-${dataType}]`)
        let width = boldLine.css('width')
            
        // if($(this).hasClass('inactive')){ 
        //     dataTypeSelector.addClass('inactive');           
        //     $(this).removeClass('inactive');

            if($(this).hasClass('one')){
                boldLine.css('transform', `translateX(calc(${width}*0))`)
            } else if ($(this).hasClass('two')) {
                boldLine.css('transform', `translateX(calc(${width}*1))`)
            } else if ($(this).hasClass('three')) {
                boldLine.css('transform', `translateX(calc(${width}*2))`)

            } 
            
            contentSelect.hide();
            
            newDataValue.fadeIn('fast');            
        //  }
    })
})