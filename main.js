function mudarPagina(num) {
    // 1. Pega as duas listas
    const p1 = document.getElementById('pagina-1');
    const p2 = document.getElementById('pagina-2');
    const p3 = document.getElementById('pagina-3');

    
    // 2. Pega os botões para mudar o estilo visual
    const btn1 = document.getElementById('btn-1');
    const btn2 = document.getElementById('btn-2');
    const btn3 = document.getElementById('btn-3');


    if (num === 1) {
        // Mostra pag 1, esconde pag 2
        p1.classList.remove('hidden');
        p2.classList.add('hidden');
        p3.classList.add('hidden');
        
        // Ativa botão 1, desativa botão 2
        btn1.className = "w-10 h-10 rounded-lg bg-bluePrimary text-white font-bold shadow-md";
        btn2.className = "w-10 h-10 rounded-lg bg-white border border-gray-200 text-gray-600";
        btn3.className = "w-10 h-10 rounded-lg bg-white border border-gray-200 text-gray-600";

    } else if (num == 2) {
        // Mostra pag 2, esconde pag 1
        p1.classList.add('hidden');
        p2.classList.remove('hidden');
        p3.classList.add("hidden")
        
        // Ativa botão 2, desativa botão 1
        btn2.className = "w-10 h-10 rounded-lg bg-bluePrimary text-white font-bold shadow-md";
        btn1.className = "w-10 h-10 rounded-lg bg-white border border-gray-200 text-gray-600";
        btn3.className = "w-10 h-10 rounded-lg bg-white border border-gray-200 text-gray-600";

    } else {

        p1.classList.add('hidden');
        p3.classList.remove('hidden');
        p2.classList.add("hidden")
        
        // Ativa botão 2, desativa botão 1
        btn3.className = "w-10 h-10 rounded-lg bg-bluePrimary text-white font-bold shadow-md";
        btn1.className = "w-10 h-10 rounded-lg bg-white border border-gray-200 text-gray-600";
        btn2.className = "w-10 h-10 rounded-lg bg-white border border-gray-200 text-gray-600";
    }
    

}



                const btn = document.getElementById('menu-btn');
                const menu = document.getElementById('menu');
                const menuIcon = document.getElementById('menu-icon');
                const links = document.querySelectorAll('.mobile-link');

                btn.addEventListener('click', () => {
                    const isHidden = menu.classList.toggle('hidden');
                    menuIcon.innerText = isHidden ? '☰' : '✕';
                });

                links.forEach(link => {
                    link.addEventListener('click', () => {
                        menu.classList.add('hidden');
                        menuIcon.innerText = '☰';
                    });
                });