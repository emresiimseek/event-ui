<template>
  <co-page-layout position="relative">
    <template #header>
      <nav-bar class="sticky-top position-relative" />
    </template>
    <div class="pt-5">
      <span>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
        temporibus, officiis omnis doloribus explicabo totam saepe sunt est, ad
        sapiente, voluptatem, perferendis quas dolorem alias. Dolor optio
        nesciunt eum illum corporis omnis itaque quam deleniti incidunt, aliquam
        molestiae, quo, saepe modi similique assumenda praesentium cum? Ducimus
        nemo tempora rem iure, a porro dicta quo eos, commodi doloribus
        inventore distinctio! Eius consequatur animi in sequi harum
        exercitationem delectus quod aliquid recusandae quisquam! Harum rerum
        dolore ad, cum pariatur voluptatibus in. Consequuntur eaque, dolorem
        magni molestias error similique ab corrupti, voluptate sapiente libero
        nihil culpa nam aliquam voluptatum mollitia recusandae et quas, iure
        laudantium. Reprehenderit labore vel dolores tempore eius, consectetur
        quisquam nemo voluptate incidunt mollitia nam cum minus aut repellat rem
        dolorem minima ea odio cupiditate culpa. Quaerat nulla odio voluptatum
        doloribus, et, ipsum perferendis repellendus molestiae ratione eligendi
        natus iure repellat mollitia! Illum nisi consequatur, esse placeat,
        eveniet consectetur alias voluptatem beatae amet adipisci provident
        pariatur veniam accusantium minus iste sequi nobis quibusdam maxime
        iusto cumque quos accusamus officiis? Ipsum, ea harum nihil aut natus
        dignissimos enim error autem maiores blanditiis perspiciatis, veniam
        animi reiciendis quisquam odit, sunt modi provident similique adipisci
        quis delectus aliquam praesentium. Accusamus, alias quidem
        necessitatibus nostrum architecto voluptatum distinctio, quisquam quia
        facere delectus amet ratione iusto sit. Placeat nulla totam rerum
        debitis dolor ex aut vel, officiis et sapiente commodi, tempore quam
        accusamus voluptatum velit. Possimus, odio voluptatum ducimus sint vel
        nobis ullam blanditiis maiores repellendus soluta facere ea ipsam alias
        voluptates reiciendis aspernatur voluptatibus consequatur. Beatae id
        culpa placeat voluptatum consequuntur temporibus officiis iure fugiat
        quia maxime, quibusdam earum nulla dignissimos vero vitae quod dolor
        optio explicabo porro? Soluta itaque, rerum ab vel perferendis vero
        iusto voluptate voluptatum sapiente, dicta quidem doloremque ad
        obcaecati commodi quaerat voluptatem, mollitia earum. Non repellendus
        laudantium, dolor nihil ex mollitia, soluta commodi facilis amet
        reprehenderit perspiciatis. Magni ipsa sunt tenetur suscipit in aut quos
        provident obcaecati numquam, iure quas nihil, consectetur facilis
        expedita quo perferendis dolorem sequi architecto, earum placeat id
        pariatur saepe excepturi eius. Molestias debitis cupiditate fuga,
        suscipit eos porro voluptatibus cumque eum, corporis hic quos
        repellendus adipisci et optio voluptatum commodi vero. Obcaecati
        quibusdam molestias ab atque laudantium ullam nisi explicabo, libero
        dicta animi natus dolore neque ipsum assumenda vitae reprehenderit
        voluptatem tempora iusto doloremque quo distinctio officiis. Eum, sint?
        Repellendus minima quis ad ipsa. Labore eveniet, vero natus quae
        veritatis mollitia et! Excepturi esse sunt eos et pariatur nostrum
        voluptates voluptas cupiditate, magni aliquid, autem aut quis
        voluptatibus quod perferendis nisi, adipisci modi quaerat labore
        doloremque? Animi velit aperiam dicta adipisci nobis commodi dolorum
        quibusdam molestias exercitationem eaque, vero facere unde consectetur
        modi repellendus voluptatibus ullam. Tempore, quis ea! Sit, laudantium.
        Dolores nihil expedita corrupti quod, ipsum nobis nesciunt tempora omnis
        temporibus. Earum itaque beatae animi deleniti! Culpa quo quam aliquam
        neque dicta, laudantium tempore impedit obcaecati voluptas, inventore
        accusantium officia accusamus porro? Sapiente sed corrupti repellat
        facere inventore, non explicabo earum veniam eos, quidem quas sint,
        dicta cum tempora natus omnis nobis id illum ea delectus eius! Maiores
        quaerat ipsum sunt nostrum. Quidem veniam nobis obcaecati eaque enim et,
        rem libero dolore cum ex aspernatur a quaerat inventore, architecto fuga
        esse est repudiandae vero, modi error? Similique dolor ullam repellat
        sapiente corrupti. Labore amet voluptatibus reprehenderit voluptates
        placeat id eligendi exercitationem aliquid quam nesciunt vitae
        architecto suscipit a repudiandae facere, in mollitia dolor nemo. Enim,
        hic eligendi. Commodi tempore accusamus voluptatum tempora dicta
        recusandae eius molestiae aperiam labore aliquam eaque perferendis
        impedit nemo cupiditate provident, voluptatibus inventore laboriosam
        maiores illum. Perspiciatis nostrum in fugiat, quaerat excepturi maiores
        alias magnam tenetur iure voluptatum dolores minima et laudantium
        veritatis qui explicabo inventore ad ab porro cumque reprehenderit
        totam. At, cum error numquam eligendi labore minus sit dicta aliquam
        beatae magnam neque tenetur explicabo in possimus dolorem similique
        tempora! Odit, officia excepturi soluta dolores vel adipisci, ut qui
        ipsum esse tempora voluptates quam ipsa voluptatem consequuntur rem
        culpa! Fugit veniam harum ab quidem mollitia recusandae id ipsam,
        dolorum similique commodi sit magnam voluptatem animi nesciunt numquam,
        iste ad tempore cupiditate illum sed laborum? Dolorum, ipsa sint laborum
        non dolores id.</span
      >
    </div>
  </co-page-layout>
</template>

<script>
import BaseComponent from "@/components/common-components/BaseComponent.vue";
import CoPageLayout from "@/components/common-components/CoPagelayout.vue";
import NavBar from "@/components/common-components/NavBar.vue";
import { Options, Vue } from "vue-class-component";
@Options({ components: { CoPageLayout, NavBar, BaseComponent } })
export default class Home extends BaseComponent {}
</script>

<style>
.main {
  background-color: #fafafa;
  height: 100%;
}
</style>