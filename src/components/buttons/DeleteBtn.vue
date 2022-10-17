<template>
    <button class="delete-btn" 
            @click="$emit('remove-todo', todo.id)"
    >        
        <i class="fas fa-trash"></i>
    </button>
</template>

<script>
export default {
    props: ['todo']
}
</script>

<style lang="scss">
.delete-btn {
    @include baseBtnStyles;
    background: $deleteColor;
    &:hover {
        background: $mainColor;
        color: $deleteColor;
    }
}
</style>