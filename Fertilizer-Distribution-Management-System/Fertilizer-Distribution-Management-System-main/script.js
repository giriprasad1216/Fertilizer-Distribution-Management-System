document.addEventListener('DOMContentLoaded', function() {
    const orderForm = document.getElementById('order-form');
    const orderSummary = document.getElementById('order-summary');

    orderForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const address = document.getElementById('address').value;
        const fertilizerType = document.getElementById('fertilizer-type').value;
        const quantity = document.getElementById('quantity').value;
        let price;

        if( 'nitrogen' == fertilizerType ){
            price = quantity * 10
        }
        else if( 'phosphorus' == fertilizerType){
            price = quantity * 15
        }
        else {
            price = quantity *20
        }

        document.getElementById('summary-name').textContent = name;
        document.getElementById('summary-address').textContent = address;
        document.getElementById('summary-type').textContent = fertilizerType;
        document.getElementById('summary-quantity').textContent = quantity;
        document.getElementById('summary-price').textContent = price;

        orderForm.style.display = 'none';
        orderSummary.style.display = 'block';
    });
});
