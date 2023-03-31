<template>
  <div class="form-group d-flex flex-column">
    <label class="form-label"
      >{{ title ?? "Agregar Imagen" }}
      <sup v-show="isrequired != ''" class="text-danger">*</sup>
    </label>

    <input
      class="form-control"
      :name="name"
      type="file"
      accept="image/*"
      @input="imgPicked"
      multiple
      ref="input"
      :required="isrequired != '' ? true : false"
    />

    <div class="mt-2 d-flex pictures-preview">
      <div v-for="imgS in imgSelected" class="pp-img-div" :key="imgS.name">
        <img class="img-thumbnail-0" :src="imgS.src" alt="" srcset="" />
        <span @click="removePreview(imgS.name)" class="trash">
          <i class="fa fa-trash-o"></i>
        </span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    name: String,
    isrequired: String,
    title: String,
  },

  data() {
    return {
      imgSelected: [],
    };
  },

  methods: {
    imgPicked(e) {
      this.imgSelected = [];
      e.srcElement.files.forEach((file) => {
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
          this.imgSelected.push({ name: file.name, src: reader.result });
        };
      });
    },
    removePreview(fileName) {
      this.imgSelected = this.imgSelected.filter((img) => img.name != fileName);
      const dt = new DataTransfer();
      for (let file of this.$refs.input.files) {
        if (file.name !== fileName) {
          dt.items.add(file);
        }
      }
      this.$refs.input.files = dt.files;
    },
  },
};
</script>

<style scoped>
.pictures-preview {
  overflow: scroll;
  width: 100%;
}
.img-thumbnail-0 {
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 5px;
  width: 150px;
  height: 150px;
}
.pp-img-div {
  position: relative;
}
.pp-img-div:hover .trash {
  display: block;
}
.trash {
  position: absolute;
  right: 0;
  top: 0;
  display: none;
  background-color: red;
  padding: 5px;
}
.trash i {
  color: white;
}
</style>
