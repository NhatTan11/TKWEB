function KiemTraChanLe(so){
    if(so % 2 == 0){
        return("le");
    }
    else{
        return("chan");
    }
    console.log(KiemTraChanLe(7)); // Ket qua: "Le"
    console.log(KiemTraChanLe(10)); // Ket qua: "Chan"

}