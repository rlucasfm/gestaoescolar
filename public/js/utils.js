function insertFormatedDate(id, data){    
    let dataRaw = new Date(data);
    dataRaw.setTime(dataRaw.getTime() + (5*60*60*1000))
    const formatado = dataRaw.toLocaleDateString('fr-CA')
    const id_input = "#"+id;
    $(id_input).val(formatado)
}