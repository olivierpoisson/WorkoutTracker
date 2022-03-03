<template>
    <Navigation />
    <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
        neque soluta corrupti porro. Iusto excepturi accusantium dolores,
        laboriosam quod nobis culpa voluptas corporis, fugiat ex labore vero
        praesentium laudantium hic asperiores nostrum dolorum nisi nam dolore
        aliquid optio voluptatum repellat tenetur? Fugiat minus sint ab,
        similique incidunt harum iure nam animi autem consectetur ad quas illo
        aut cum quasi perspiciatis reprehenderit aspernatur suscipit! Totam
        ducimus debitis quos magnam adipisci necessitatibus inventore eius.
        Quaerat reprehenderit placeat voluptates fugiat dignissimos et animi
        ducimus quisquam laudantium minima labore dolores laborum ut ratione
        laboriosam illum alias, natus possimus deserunt vero. Culpa excepturi
        consectetur aspernatur iste recusandae ad totam atque consequuntur quas,
        consequatur dolore officia illo magni et! Consequatur numquam ratione
        incidunt explicabo laboriosam vel minima quae? Eum beatae, error at
        praesentium dignissimos ea nulla adipisci nesciunt modi optio vel
        sapiente perferendis aspernatur! Assumenda magni libero numquam
        similique necessitatibus voluptates aut dolorum reprehenderit quaerat
        nostrum eaque commodi repudiandae sed impedit distinctio cupiditate
        fuga, voluptatibus quae perferendis blanditiis ducimus architecto
        exercitationem delectus ex! Sunt recusandae, ex harum ad exercitationem
        dolores? Molestias eius nihil ratione quisquam dolor maxime vel nemo
        ipsa deserunt praesentium ad minima doloribus nulla reprehenderit, nisi
        provident quibusdam amet temporibus dignissimos nostrum aut!
        Necessitatibus quas possimus quisquam maxime nisi, soluta autem quos!
        Obcaecati quas enim iusto harum, hic sunt officiis, et fugiat voluptatem
        rem doloribus animi nihil doloremque nobis alias? Incidunt fugit
        voluptas quas dolores ipsa perferendis reiciendis autem odio, mollitia
        explicabo quibusdam commodi necessitatibus laborum voluptatem dolorum
        fuga voluptatibus reprehenderit quaerat laudantium. Suscipit ducimus
        nihil quae ad veritatis laudantium adipisci quaerat perspiciatis. Quam,
        velit ipsam, commodi in dolor autem rem perferendis harum repudiandae
        explicabo accusamus blanditiis suscipit minus asperiores esse odio
        placeat ipsum aliquam. Nihil cum commodi, earum quisquam corrupti,
        repellendus error expedita nulla nam qui doloribus quod rerum similique
        laborum asperiores. Iste sed, id quia ducimus architecto deleniti
        soluta! Nemo quam corrupti quas illo debitis ipsum. Vel, rem voluptatum
        itaque cupiditate neque quos quibusdam placeat culpa sequi repudiandae
        veritatis iure quaera
    </p>
</template>

<script>
import Navigation from "./components/Nav.vue";

export default {
    components: {
        Navigation,
    },
};
</script>

<style>
* {
    font-family: "Poppins", sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
#app {
    padding: 15vh 10vw 0 10vw;
}
.Row {
    display: flex;
}
.RowCenter {
    display: flex;
    align-items: center;
    justify-content: center;
}
.Col {
    display: flex;
    flex-direction: column;
}
.ColCenter {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
button {
    padding: 1em 2em;
}
button:active {
    transform: scale(0.95);
}
a {
    text-decoration: none;
    color: #2c3e50;
}
h1,
h2,
h3,
h4,
h5,
a,
p {
    text-underline-offset: 5px;
}
</style>
