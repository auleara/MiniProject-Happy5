const clothing = ["shirt", "pants", "jacket"]
const color = ["black", "white"]
const size = ["S","M","L"]


const generateList = () => {
 
    const list = {
      clothing : clothing,
      color : color,
      size : size
    }

    listDown= {}
    const listSatu = list.clothing
    const listDua = list.color
    const listTiga = list.size
    for(a=0; a<=listSatu; a++){
      for(b=0; b<=listDua; b++){
        for(c=0; c<=listSatu; c++){
          listDown.prototype.push(list.clothing[a] +""+ list.color[b] +""+ list.size[c])}
    }  
    }
    return list;
  }
constlist = generateList();
