<!-- @format -->

<template>
    <div class="gear">
        <h1 class="page-header mb-5"></h1>
        <b-container>
            <p class="mb-5"></p>
            <b-row
                v-for="(row, i) in rows.body"
                :key="`row-${i}`"
                class="data-row"
            >
                <b-col v-for="col in row" :key="col.title">
                    <h2 class="mb-3">{{ col.title }}</h2>
                    <ul>
                        <li v-for="(item, j) in col.items" :key="`item-${j}`">
                            <a :href="item.link" target="_blank">{{
                                item.text
                            }}</a>
                        </li>
                    </ul>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
/** @format */
import {RouterEventBus} from '../js/router-eventbus';

export default {
    name: 'Gear',

    props: {},

    data() {
        return {
            rows: {
                body: [
                    [
                        {
                            title: 'Coding Software',
                            items: [
                                {
                                    text: 'Visual Studio Code',
                                    link: 'https://github.com/microsoft/vscode',
                                },
                                {
                                    text: 'Visual Studio Community 2019',
                                    link:
                                        'https://visualstudio.microsoft.com/vs/',
                                },
                                {
                                    text: 'Yakuake Terminal',
                                    link: 'https://github.com/KDE/yakuake',
                                },
                                {
                                    text: 'Manjaro KDE',
                                    link:
                                        'https://manjaro.org/downloads/official/kde/',
                                },
                                {
                                    text: 'Windows 10 Home',
                                    link:
                                        'https://www.microsoft.com/de-de/d/windows-10-home/d76qx4bznwk4?activetab=pivot%3aoverviewtab',
                                },
                            ],
                        },
                        {
                            title: 'Media Software',
                            items: [
                                {
                                    text: 'OBS Studio (Recording / Streaming)',
                                    link: 'https://obsproject.com/',
                                },
                                {
                                    text:
                                        'DaVinci Resolve (Video Editing & Animation)',
                                    link:
                                        'https://www.blackmagicdesign.com/products/davinciresolve/',
                                },
                                {
                                    text:
                                        'Vegas Pro 14 (Video Editing & Animation - secondary)',
                                    link:
                                        'https://store.steampowered.com/app/528200',
                                },
                                {
                                    text: 'FFMPEG (Video Editing & Converting)',
                                    link: 'https://ffmpeg.org/',
                                },
                                {
                                    text:
                                        'Adobe After Effetcs (Video Editing & Animation)',
                                    link:
                                        'https://www.adobe.com/products/aftereffects.html',
                                },
                                {
                                    text: 'Affinity Photo (Design Editing)',
                                    link:
                                        'https://affinity.serif.com/en-gb/photo/',
                                },
                                {
                                    text: 'Affinity Designer (Design Editing)',
                                    link:
                                        'https://affinity.serif.com/en-gb/designer/',
                                },
                            ],
                        },
                    ],
                    [
                        {
                            title: 'PC Hardware',
                            items: [
                                {
                                    text: 'AMD Ryzen 7 5800X (CPU)',
                                    link:
                                        'https://geizhals.de/amd-ryzen-7-5800x-v43019.html',
                                },
                                {
                                    text:
                                        'Kingston HyperX Fury DDR4 CL15 32GB (RAM)',
                                    link:
                                        'https://geizhals.de/kingston-hyperx-fury-schwarz-dimm-kit-32gb-hx424c15fb4k2-32-a2314792.html',
                                },
                                {
                                    text:
                                        'Sapphire Radeon R9 380 Nitro OC (GPU)',
                                    link:
                                        'https://geizhals.eu/sapphire-radeon-r9-380-nitro-oc-11242-13-20g-a1335398.html',
                                },
                                {
                                    text: 'ASUS ROG Strix X570-F (Mainboard)',
                                    link:
                                        'https://geizhals.de/asus-rog-strix-x570-f-gaming-90mb1160-m0eay0-a2079030.html',
                                },
                                {
                                    text:
                                        'Samsung SSD 970 EVO Plus 1TB (SSD 1)',
                                    link:
                                        'https://geizhals.de/samsung-ssd-970-evo-plus-1tb-mz-v7s1t0bw-a1972735.html',
                                },
                                {
                                    text: 'Samsung SSD 860 EVO 500GB (SSD 2)',
                                    link:
                                        'https://geizhals.eu/samsung-ssd-860-evo-500gb-mz-76e500b-a1756904.html',
                                },
                                {
                                    text: 'Crucial SSD P2 500GB (SSD 3)',
                                    link:
                                        'https://geizhals.de/crucial-p2-ssd-500gb-ct500p2ssd8-a2267990.html',
                                },
                                {
                                    text:
                                        'Seagate BarraCuda Compute 2TB (HDD 1)',
                                    link:
                                        'https://geizhals.eu/seagate-barracuda-compute-2tb-st2000dm008-a1700138.html',
                                },
                                {
                                    text:
                                        'Seagate BarraCuda Compute 8TB (Archive HDD)',
                                    link:
                                        'https://geizhals.de/seagate-barracuda-compute-8tb-st8000dm004-a1627294.html',
                                },
                            ],
                        },
                        {
                            title: 'Periphery',
                            items: [
                                {
                                    text: 'Acer S2 S242HLDbid 24" (Display)',
                                    link:
                                        'https://geizhals.eu/acer-s2-s242hldbid-um-fs2ee-d01-a1486397.html',
                                },
                                {
                                    text: 'BenQ GW2265HM 21.5" (Display)',
                                    link:
                                        'https://geizhals.eu/benq-gw2265hm-9h-lasla-dbe-9h-lasla-dbu-a978474.html',
                                },
                                {
                                    text: 'Logitech G PRO Wireless (Mouse)',
                                    link:
                                        'https://geizhals.eu/logitech-g-pro-wireless-gaming-mouse-910-005272-910-005273-a1871021.html',
                                },
                                {
                                    text:
                                        'Corsair K70 MK2 w/ Cherry MX Brown (Keyboard)',
                                    link:
                                        'https://geizhals.eu/corsair-gaming-k70-rgb-mk-2-ch-9109012-uk-a1976130.html',
                                },
                                {
                                    text:
                                        'Logitech G502 Proteus Spectrum (Mouse 2)',
                                    link:
                                        'https://geizhals.eu/logitech-g502-proteus-spectrum-910-004617-910-004618-a1377097.html',
                                },
                                {
                                    text:
                                        'Logitech G810 Orion Spectrum (Keyboard 2)',
                                    link:
                                        'https://geizhals.eu/logitech-g810-orion-spectrum-920-007740-920-008067-a1389652.html',
                                },
                                {
                                    text:
                                        'beyerdynamic DT 990 PRO (Headphones)',
                                    link:
                                        'https://geizhals.eu/beyerdynamic-dt-990-pro-459-038-a114314.html',
                                },
                                {
                                    text: 'RØDE NT1-A (Microphone)',
                                    link:
                                        'https://geizhals.de/r-de-nt1-a-a183277.html',
                                },
                                {
                                    text:
                                        'M-Audio Air 192 | 4 (Audio Interface)',
                                    link:
                                        'https://geizhals.de/m-audio-air-192-4-a2162277.html',
                                },
                                {
                                    text: 'RØDE NT-USB (Microphone 2)',
                                    link:
                                        'https://geizhals.de/r-de-nt-usb-a1130129.html',
                                },
                                {
                                    text:
                                        'Microsoft Xbox 360 wireless (Controller)',
                                    link:
                                        'https://geizhals.eu/microsoft-xbox-360-x360-wireless-controller-for-windows-black-pc-xbox-360-jr9-00007-jr9-00010-a604169.html',
                                },
                                {
                                    text: 'Logitech HD Pro C920 (Cam)',
                                    link:
                                        'https://geizhals.eu/logitech-hd-pro-c920-960-001055-a732329.html',
                                },
                                {
                                    text: 'Sony ZV-E10 (Camera)',
                                    link:
                                        'https://geizhals.de/sony-zv-e10-body-zv-e10-a2571418.html',
                                },
                                {
                                    text: 'Sony 16-50mm f/3.5-5.6 OSS (Lens)',
                                    link:
                                        'https://www.amazon.com/Sony-16-50mm-3-5-5-6-Retractable-Packaging/dp/B01LOVWG8C',
                                },
                                {
                                    text:
                                        'Bose QuietComfort 35 II (Mobile Headphones)',
                                    link:
                                        'https://geizhals.de/bose-quietcomfort-35-ii-schwarz-789564-0010-a1696985.html',
                                },
                            ],
                        },
                    ],
                ],
            },
        };
    },
    mounted() {
        RouterEventBus.$emit('mounted', this.$options.name);
    },
};
</script>

<style scoped>
/** @format */

a {
    font-size: 18px;
}

a:hover {
    text-decoration: underline;
}

.gear {
    margin-top: 120px;
}

@media screen and (max-width: 690px) {
    .data-row {
        display: block !important;
    }
}
</style>
