/** Static, trusted SVG markup for the brand illustrations. */
export const SPROUT =
  '<g class="sprout"><path d="M200 250V150"/><path d="M168 250h64"/></g>' +
  '<path class="leaf low" d="M200 196c-48 5-66-26-63-56 40-4 66 17 63 56z"/>' +
  '<path class="leaf high" d="M200 166c-2-44 26-68 66-64 3 37-24 68-66 64z"/>';

export const MATERIALS: Record<'bottle' | 'can' | 'box', string> = {
  bottle:
    '<path class="m-pet" d="M-8-32h16v9l9 11v42a5 5 0 0 1-5 5h-24a5 5 0 0 1-5-5v-42l9-11z"/><path class="m-white" d="M-17 2h34v15h-34z"/>',
  can: '<rect class="m-can" x="-18" y="-28" width="36" height="58" rx="7"/><path class="m-none" d="M-18-16h36M-18 18h36"/>',
  box: '<path class="m-card" d="M-27-14h54v42h-54z"/><path class="m-card-l" d="M-27-14l8-13h38l8 13z"/><path class="m-none" d="M-6-14v16h12v-16"/>',
};

const chip = (index: number, position: string, dx: number, dy: number, tone: string, material: keyof typeof MATERIALS) =>
  `<g transform="translate(${position})"><g class="chip ${tone}" style="--i:${index};--dx:${dx}px;--dy:${dy}px">` +
  `<circle r="46"/><g class="ec-m">${MATERIALS[material]}</g></g></g>`;

/** Recyclable materials orbiting around a sprout. */
export const LOOP_ART =
  '<circle class="disc" cx="200" cy="200" r="178"/>' +
  '<g class="ring"><path d="M252 78A132 132 0 0 1 332 200"/><path d="M318 184l14 18 16-17"/>' +
  '<path d="M278 307a132 132 0 0 1-156 0"/><path d="M141 304l-21 2 5 22"/>' +
  '<path d="M68 200a132 132 0 0 1 80-122"/><path d="M127 71l22 7-9 21"/></g>' +
  chip(0, '200 68', 0, -90, 'a', 'bottle') +
  chip(1, '314 266', 90, 60, 'b', 'can') +
  chip(2, '86 266', -90, 60, 'c', 'box') +
  `<g transform="translate(0 8)">${SPROUT}</g>`;

const mat = (material: keyof typeof MATERIALS) => `<g class="ec-m">${MATERIALS[material]}</g>`;

/** Exchange scene: sorted bins, drop-off point, scale and reward, revealed by step. */
export const SCENE_ART =
  '<g class="layer bins"><path class="b1" d="M50 205h80l-9 75H59z"/><path class="b2" d="M160 205h80l-9 75h-62z"/><path class="b3" d="M270 205h80l-9 75h-62z"/></g>' +
  '<g class="layer point"><path class="roof" d="M92 96l108-52 108 52z"/><path class="post" d="M108 96v184M292 96v184"/><path class="table" d="M100 250h200v30H100z"/></g>' +
  '<g class="layer weigh"><path class="tray" d="M110 258h180l12 24H98z"/><circle class="dial" cx="200" cy="120" r="66"/><path class="arc" d="M158 120a42 42 0 0 1 84 0"/><path class="needle" d="M200 120V76"/><circle class="pin" cx="200" cy="120" r="9"/></g>' +
  `<g class="layer reward"><circle class="halo" cx="200" cy="170" r="125"/><g class="gift">${SPROUT}</g><path class="pot" d="M155 250h90l-12 50h-66z"/></g>` +
  `<g class="mv m1">${mat('bottle')}</g><g class="mv m2">${mat('can')}</g><g class="mv m3">${mat('box')}</g>`;

export const SCENE_LABELS = [
  'Materiales separados por tipo',
  'Materiales entregados en el punto de canje',
  'Materiales sobre la balanza',
  'Una planta como incentivo',
];
