var imgFeature = document.querySelector('.img-feature')
var listImg = document.querySelectorAll('.LeftBlock_list div img')
var preBtn = document.querySelector('.control__pre')
var nextBtn = document.querySelector('.control__next')

var currentIndex = 0;

function updateImg(index){

    document.querySelectorAll('.LeftBlock_list div').forEach(item=>{
        item.classList.remove('active')
    })
    currentIndex = index;
    imgFeature.src = listImg[index].getAttribute('src')
    listImg[index].parentElement.classList.add('active')

}


listImg.forEach((imgElement, index)=>{
    imgElement.addEventListener('click',e=>{
        updateImg(index)
    })
})

preBtn.addEventListener('click' , e=>{
    if(currentIndex == 0){
    currentIndex = listImg.length-1
    }
    else{
        currentIndex-- 
    }
    updateImg(currentIndex)

})

nextBtn.addEventListener('click' , e=>{
    if(currentIndex == listImg.length){
    currentIndex = 0
    }
    else{
        currentIndex++ 
    }
    updateImg(currentIndex)

})

