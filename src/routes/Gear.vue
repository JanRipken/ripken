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
                                    text: 'OBS Studio (Recording)',
                                    link: 'https://obsproject.com/',
                                },

                                {
                                    text: 'FFMPEG (Video Editing)',
                                    link: 'https://ffmpeg.org/',
                                },
                            ],
                        },
                    ],
                    [
                        {
                            title: 'PC Hardware',
                            items: [
                                {
                                    text:
                                        '8 x intel Core i7-6700CPU @ 3.40 GHz ',
                                },
                                {
                                    text:
                                        '16GB G.Skill RipJaws V schwarz DDR4-3200 DIMM CL16 Dual Kit',
                                    link:
                                        'https://www.mindfactory.de/product_info.php/16GB-G-Skill-RipJaws-V-schwarz-DDR4-3200-DIMM-CL16-Dual-Kit_1013799.html',
                                },
                                {
                                    text:
                                        '8GB XFX Radeon RX 580 GTS Core Aktiv PCIe 3.0 x16',
                                    link:
                                        'https://www.mindfactory.de/product_info.php/8GB-XFX-Radeon-RX-580-GTS-Core-Aktiv-PCIe-3-0-x16--Retail-_1167751.html',
                                },
                                {
                                    text: 'ASUS ROG Strix X570-F (Mainboard)',
                                    link:
                                        'https://geizhals.de/asus-rog-strix-x570-f-gaming-90mb1160-m0eay0-a2079030.html',
                                },
                                {
                                    text: 'Samsung SSD 870 EVO 1TB (SSD 1)',
                                    link:
                                        'https://geizhals.de/samsung-ssd-870-evo-1tb-mz-77e1t0b-a2458826.html',
                                },
                                {
                                    text: 'Samsung SSD 750 EVO 250GB (SSD 2)',
                                },
                                {
                                    text:
                                        'Toshiba P300 Desktop PC 3TB, SATA 6Gb/s (HDD 1)',
                                    link:
                                        'https://geizhals.de/toshiba-p300-high-performance-3tb-hdwd130uzsva-a1358519.html',
                                },
                            ],
                        },
                        {
                            title: 'Periphery',
                            items: [
                                {
                                    text:
                                        'Samsung S24F350FHU / S24F352FHU / S24F354FHU, 23.5"" (Display 1)',
                                    link:
                                        'https://geizhals.de/samsung-s24f350-s24f352-s24f354-ls24f350fhuxen-ls24f352fhuxen-ls24f354fhuxen-a1424024.html',
                                },
                                {
                                    text:
                                        'Samsung S24F350FHU / S24F352FHU / S24F354FHU, 23.5"  (Display 2)',
                                    link:
                                        'https://geizhals.de/samsung-s24f350-s24f352-s24f354-ls24f350fhuxen-ls24f352fhuxen-ls24f354fhuxen-a1424024.html',
                                },
                                {
                                    text:
                                        'Logitech M535 Bluetooth Maus (Mouse)',
                                    link:
                                        'https://geizhals.de/logitech-m535-bluetooth-maus-grau-910-004530-a1330180.html',
                                },
                                {
                                    text:
                                        'Logitech G815 Lightsync RGB, GL Tactile (Keyboard)',
                                    link:
                                        'https://geizhals.de/logitech-g815-lightspeed-920-008985-a2118827.html',
                                },
                                {
                                    text: 'Razer Ouroboros, USB (Mouse 2)',
                                    link:
                                        'https://geizhals.de/razer-ouroboros-rz01-00770100-r3g1-a815637.html',
                                },
                                {
                                    text:
                                        'Logitech G910 Orion Spectrum, Romer-G Tactile, USB (Keyboard 2)',
                                    link:
                                        'https://geizhals.de/logitech-g910-orion-spectrum-920-008013-a1468996.html',
                                },
                                {
                                    text: 'Logitech G935 (Headset)',
                                    link:
                                        'https://geizhals.de/logitech-g935-schwarz-981-000744-a1982651.html',
                                },
                                {
                                    text: 'Aukey PC-LM1E 1080p Webcam (Cam)',
                                    link:
                                        'https://geizhals.de/aukey-1080p-webcam-pc-lm1e-a2354385.html',
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
