<template>
    <div>
        <div v-if="previewUrl" class="image-container">
            <button @click="handleRemoveFile">delete</button>
            <img :src="previewUrl" alt="Preview" />
        </div>
        <input type="file" @change="handleFileChange" accept="image/*" class="file-feild" />

    </div>
</template>
  
<script>
import { ref } from 'vue'

export default {
    emits: ['data-to-parent'],
    setup() {
        const selectedFile = ref(null);
        const previewUrl = ref(null)

        return { selectedFile, previewUrl }
    },
    methods: {
        handleFileChange(event) {
            const file = event.target.files[0];


            if (file) {
                const reader = new FileReader();
                reader.onload = () => {
                    this.previewUrl = reader.result;

                };
                reader.readAsDataURL(file);
                this.selectedFile = file;
                const dataToSend = this.selectedFile;
                this.$emit('data-to-parent', dataToSend);
            } else {

                this.previewUrl = null;
                this.selectedFile = null;
            }
        },
        handleRemoveFile() {
            const fileUpload = document.querySelector('.file-feild');
            this.previewUrl = null;
            this.selectedFile = null;
            fileUpload.value = "";
            this.$emit('data-to-parent', '');

        },
        sendDataToParent() {
            // Emit the custom event with data
        },
    },
};
</script>
  
<style scoped>
img {
    width: 50px;
    height: 50px;
}

.file-feild {}
</style>