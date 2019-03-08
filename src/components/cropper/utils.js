import lrz from 'lrz'

/**
 * @description 上传图片点击事件
 * @export
 * @returns
 */
let uploadImgInput
export function uploadImgAction () {
  return new Promise(function (resolve, reject) {
    // 创建input标签
    if (!uploadImgInput) {
      uploadImgInput = document.createElement('input')
      uploadImgInput.type = 'file'
      uploadImgInput.accept = 'image/*'
    }
    // 监听动作
    uploadImgInput.addEventListener('change', _fileChange)
    uploadImgInput.click()
    function _fileChange (e) {
      // 移除监听
      uploadImgInput.removeEventListener('change', _fileChange)
      const file = e.target.files[0]
      // if (!/\.(gif|jpg|jpeg|png|bmp|GIF|JPG|PNG)$/.test(e.target.value)) {
      //   alert('图片类型必须是.gif,jpeg,jpg,png,bmp中的一种')
      //   return false
      // }
      e.target.value = ''

      lrz(file, {
        quality: 0.6
      }).then(
        (rst) => {
          let bundelImg = rst.base64
          resolve(bundelImg)
        }
      ).catch((err) => {
        alert(err)
      })
      // var reader = new FileReader()
      // reader.onload = (e) => {
      //   let data
      //   if (typeof e.target.result === 'object') {
      //     // 把Array Buffer转化为blob 如果是base64不需要
      //     data = window.URL.createObjectURL(new Blob([e.target.result]))
      //   } else {
      //     data = e.target.result
      //   }
      //   resolve(data)
      // }
      // reader.readAsDataURL(file)
    }
  })
}
