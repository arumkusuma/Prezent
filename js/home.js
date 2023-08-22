// trigger to play music in the background with sweetalert
window.addEventListener('load', () => {
    Swal.fire({

        title: 'Pls chose your Name, if you not jamet riau, leave now!',
        // text: "You won't be able to revert this!",
        
        showCancelButton: true,
        confirmButtonColor: '#00E4ff',
        cancelButtonColor: '#00E4ff',
        confirmButtonText: 'Ica Babi Jamet',
        cancelButtonText: 'Asep Diponegoro',
    }).then((result) => { 
        if (result.isConfirmed) {
            document.querySelector('.song').play();
        } else {
            Swal.fire({
                    title: 'dih dih dih. Kamu siapa?',
                    // text: "You won't be able to revert this!",
                    
                    showconfirmButton: true,
                    confirmButtonColor: '#00E4ff',
                    cancelButtonColor: '#00E4ff',
                    confirmButtonText: 'Arkan Jamet Riau Pikun',
                    cancelButtonText: '',
            }).then((result)=> {
                if(result.isConfirmed){
                    document.querySelector('.song').play();
                }
                else {
                    document.querySelector('.song').play();
                }
            })
        }
    });
});