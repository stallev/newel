//панель product-info

let productNavTabLinks = document.querySelectorAll('.products-list__part-nav-link');
let productNavTabs = document.querySelectorAll('.products-list__part-item');

if(productNavTabLinks&&productNavTabs){
	productNavTabLinks.forEach(
		element => {
			element.addEventListener('click', function(e){
				e.preventDefault();
        productNavTabLinks.forEach(
          NavTabLink =>{
            NavTabLink.classList.remove('products-list__part-nav-link--active');
            NavTabLink.style.color = '#222222';
            NavTabLink.style.textDecoration = 'none';
          }
        );
        productNavTabs.forEach(
          NavTab =>{
            NavTab.classList.remove('products-list__part-item--active');
          }
        );
				let activeNavTabID = e.target.getAttribute('data-tab-id');
        e.target.classList.add('products-list__part-nav-link--active');
        e.target.style.color = '#C70909';
        e.target.style.textDecoration = 'underline';
				document.getElementById(activeNavTabID).classList.add('products-list__part-item--active');
			})
		}
	)
}