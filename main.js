const rangeInp = document.querySelector('input[type="range"]');
const pageviews = document.querySelector('.Pageviews span');
const price = document.querySelector('.price');
const toogleBtn = document.querySelector("input[type='checkbox']");

const billingCycle = document.getElementById('billing-cycle');
const planSelected = document.getElementById('plan-selected');
const planPrice = document.getElementById('plan-price');

let prices = [

    {id:1, views:`10k`, monthly:8},
    {id:2, views:`50k`, monthly:12},
    {id:3, views:`100k`, monthly:16},
    {id:4, views:`500k`, monthly:24},
    {id:5, views:`1M`, monthly:36},
]

// Select plan between Range input values
rangeInp.addEventListener('input',()=>{
    let rangBg = rangeInp.value / rangeInp.max * 100;
    prices.forEach(i=>{
        if(i.id == rangeInp.value){
            pageviews.innerHTML = `${i.views}`
            price.innerHTML =`<span>$${i.monthly}.00</span> /month`
        }else if(rangeInp.value < 1 ) {
            pageviews.innerHTML = `0.00k`
            price.innerHTML =`<span>$0.00</span> /month`
        }   
    })
    tooglePlan();
    rangeInp.style.background = `linear-gradient(90deg, #10d5c2 ${rangBg}%,#f1f5fe ${rangBg}%)`
})

// Toggle between monthly plan and Anually plan
function tooglePlan (){
    let plan;
    toogleBtn.checked ? plan = 'year' : plan = 'month'
    prices.forEach(i=>{
        if(i.id == rangeInp.value){
            pageviews.innerHTML = `${i.views}`
            planSelected.innerHTML = `${i.views} Pageviews`
            if(toogleBtn.checked){
                price.innerHTML =`<span>$${i.monthly * 12 * 0.75}.00</span> /${plan}`
                billingCycle.innerHTML = `Annual Plan (25% discount applied)`
                planPrice.innerHTML = `$${i.monthly * 12 * 0.75}.00 /${plan}`
            }else {
                billingCycle.innerHTML = `monthly Plan`
                price.innerHTML =`<span>$${i.monthly}.00</span> /${plan}`  
                planPrice.innerHTML =`$${i.monthly}.00 /${plan}`  
            }
        }else if(rangeInp.value < 1 ) {
            pageviews.innerHTML = `00`
            price.innerHTML =`<span>$0.00</span> /${plan}`   
        }   
    })
}

// Showing Success Messsage with plan information

const doneBtn = document.querySelector('.btn');
const successMsg = document.querySelector('.succsess-msg')

doneBtn.addEventListener('click',()=>{
    successMsg.classList.remove ('active')

})



const form = document.getElementById('form');

form.addEventListener('submit',(e)=>{
    e.preventDefault ();
    if (rangeInp.value > 0) {
        console.log (`***********************\nFrom Submited Successfully\n***********************`)
        console.log(`Your Plan: ${pageviews.innerText} pageviews\nPrice is : ${price.innerText}`)
        successMsg.classList.add('active')
        tooglePlan ();
        setTimeout(()=>{
            form.submit();
        },4000);
    }
})
