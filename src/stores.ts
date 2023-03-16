import { type Writable, writable } from 'svelte/store';
import { persisted } from 'svelte-local-storage-store'

export const work_index = writable(0);
export const work_fontsize = writable(16);

// This is a store of options that can be changed in an in-browser menu
// Just to showcase ideas during dev
export const options = persisted("modernpeople--website-2023--dev-options", {
    copyright_glyph_in_footer: true,
    prefer_font_circle_over_svg: false,
    enclose_page_numbers: false,
    show_splashscreen_for_ms: 500,
});