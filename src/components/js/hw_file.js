export default function check_type(type) {

}
export function check_image(fileName) {
  let list = new Array();

  list.push('jpg');
  list.push('gif');
  list.push('bmp');
  list.push('png');
  list.push('jpeg');


  let type = (fileName.substring(fileName.lastIndexOf(".") + 1, fileName.length)).toLowerCase();
  if(list.indexOf(type) == -1){
    return false;
  }else{
    return true;
  }


}

export function check_video(fileName) {
  let list = new Array();

  list.push('mp4');


  let type = (fileName.substring(fileName.lastIndexOf(".") + 1, fileName.length)).toLowerCase();
  if(list.indexOf(type) == -1){
    return false;
  }else{
    return true;
  }
}
export function error_image(e,url) {
  return e.src = url;
}

