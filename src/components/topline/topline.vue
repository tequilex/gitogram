<template>
    <div class="c-topline">
        <div class="x-container">
            <div class="headline">
                <slot name="headline" />
            </div>
            <div class="content" v-if="$slots.content">
                <slot name="content" />
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .c-topline {
        padding: 48px 0 37px 0;
        margin-bottom: 32px;
    }
.headline {
    display: flex;
    margin-bottom: 50px;
    justify-content: space-between;
}
</style>
