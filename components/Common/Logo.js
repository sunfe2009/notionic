// https://react-svgr.com/playground/
import * as React from 'react'

const Logo = (props) => (
<svg 
  viewBox="0 0 1080 1080" fill="none" xmlns="http://www.w3.org/2000/svg">      <defs>  <filter id="filter" x="-20%" y="-20%" width="140%" height="140%" filterUnits="objectBoundingBox" primitiveUnits="userSpaceOnUse" color-interpolation-filters="linearRGB">    <feMorphology operator="dilate" radius="20 20" in="SourceAlpha" result="morphology"/>    <feFlood flood-color="#ffffff" flood-opacity="1" result="flood"/>    <feComposite in="flood" in2="morphology" operator="in" result="composite"/>    <feMerge result="merge">          <feMergeNode in="composite" result="mergeNode"/>      <feMergeNode in="SourceGraphic" result="mergeNode1"/>      </feMerge>  </filter></defs>      <g id="notion-avatar" filter="url(#filter)">        <g id="notion-avatar-face" fill="#ffffff">      <!--?xml version="1.0" encoding="UTF-8"?-->    <title>Face/ 7</title>    <g id="Face/-7" stroke="none" stroke-width="1" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round">        <path d="M532,379 C664.54834,379 772,486.45166 772,619 C772,751.54834 764.54834,919 572,919 C415.13263,919 351.668898,801.612202 313.752775,718.980575 L313.322946,718.989282 L312,719 C267.81722,719 232,683.18278 232,639 C232,599.134956 261.158843,566.080325 299.312086,560.00055 C325.599297,455.979213 419.809919,379 532,379 Z M295.858895,624.545187 L304.141105,655.454813" id="Path" stroke="#000000" stroke-width="24"/>    </g>    </g><g id="notion-avatar-nose">      <!--?xml version="1.0" encoding="UTF-8"?-->    <title>Nose/ 8</title>    <g id="Nose/-8" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round">        <path d="M649,600 C682.333333,613.333333 699,630 699,650 C699,670 682.333333,680 649,680" id="Path" stroke="#000000" stroke-width="16"/>    </g>    </g><g id="notion-avatar-mouth">      <!--?xml version="1.0" encoding="UTF-8"?-->    <title>Mouth/ 0</title>    <g id="Mouth/-0" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round">        <path d="M549,759 C576.33038,765.666667 599.663714,769 619,769 C638.336286,769 655.002953,765.666667 669,759" id="Path" stroke="#000000" stroke-width="16"/>    </g>    </g><g id="notion-avatar-eyes">      <!--?xml version="1.0" encoding="UTF-8"?-->    <title>Eyes/ 1</title>    <g id="Eyes/-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">        <g id="Group" transform="translate(546.000000, 509.000000)">            <path d="M24,7 C37.254834,7 48,17.745166 48,31 C48,44.254834 37.254834,55 24,55 C10.745166,55 0,44.254834 0,31 C0,17.745166 10.745166,7 24,7 Z M162,7 C175.254834,7 186,17.745166 186,31 C186,44.254834 175.254834,55 162,55 C148.745166,55 138,44.254834 138,31 C138,17.745166 148.745166,7 162,7 Z" id="Combined-Shape" fill="#000000"/>            <g id="Path" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4">                <path d="M0,7 C8,2.33333333 16,0 24,0 C32,0 40,2.33333333 48,7"/>                <path d="M138,7 C146,2.33333333 154,0 162,0 C170,0 178,2.33333333 186,7"/>            </g>        </g>    </g>    </g><g id="notion-avatar-eyebrows">      <!--?xml version="1.0" encoding="UTF-8"?-->    <title>Eyebrows/ 0</title>    <g id="Eyebrows/-0" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round">        <g id="Group" transform="translate(525.000000, 492.000000)" stroke="#000000" stroke-width="16">            <path d="M0,16 C12.8888889,5.33333333 27.8888889,0 45,0 C62.1111111,0 77.1111111,5.33333333 90,16" id="Path"/>            <path d="M138,16 C150.888889,5.33333333 165.888889,0 183,0 C200.111111,0 215.111111,5.33333333 228,16" id="Path"/>        </g>    </g>    </g><g id="notion-avatar-glasses">      <!--?xml version="1.0" encoding="UTF-8"?-->    <title>Glasses/ 8</title>    <g id="Glasses/-8" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round">        <g id="Group" transform="translate(293.000000, 475.000000)" stroke="#000000">            <path d="M328.31869,48.9411765 C333.965749,25.4117647 327.377514,0 252.083396,0 C176.789279,0 173.024573,30.1176471 170.201043,48.9411765 C167.377514,67.7647059 157.024573,140.235294 227.612808,143.058824 C298.201043,145.882353 322.671631,72.4705882 328.31869,48.9411765 Z" id="Path" stroke-width="8" fill="#0C0C0C"/>            <path d="M523.46091,48.9411765 C529.107969,25.4117647 522.519734,3.63797881e-12 447.225616,3.63797881e-12 C371.931498,3.63797881e-12 368.166792,30.1176471 365.343263,48.9411765 C362.519734,67.7647059 352.166792,140.235294 422.755028,143.058824 C493.343263,145.882353 517.813851,72.4705882 523.46091,48.9411765 Z" id="Path" stroke-width="8" fill="#0C0C0C" transform="translate(444.072807, 71.569037) scale(-1, 1) translate(-444.072807, -71.569037) "/>            <line x1="301.965749" y1="7.52941176" x2="391.377514" y2="7.52941176" id="Path" stroke-width="8"/>            <path d="M301.965749,35.7647059 C317.212807,34.5098039 332.271631,33.8823529 347.14222,33.8823529 C362.012808,33.8823529 376.757907,34.5098039 391.377514,35.7647059" id="Path" stroke-width="8"/>            <line x1="217" y1="40" x2="1.3111035" y2="83.3393577" id="Path" stroke-width="16" transform="translate(109.155552, 61.669679) rotate(1.361411) translate(-109.155552, -61.669679) "/>        </g>    </g>    </g><g id="notion-avatar-hair">      <g id="Hairstyle/ 35"><path id="Path" fill-rule="evenodd" clip-rule="evenodd" d="M445 265C601.485 215.883 723 324 727 324C729.667 324 729.333 314 732 310C732 310 764 352 760 396C756 440 752.216 445.551 737 470C717.816 433.899 655.516 405.849 570.098 405.849C529.82 405.849 496.705 408.638 444 422C444 422 429.543 433.177 425 438C415.42 448.172 412.102 455.977 408 461C408 461 408.354 437.736 409.769 431.439C399.445 434.309 388.894 437.421 378.119 440.774C378.861 449.966 379.156 482.708 387 499L371 622L368.124 619.455C345.932 599.757 331.688 585.779 325.391 577.52L325 577C318.661 568.473 305.994 562.473 287 559L286.069 555.564C277.514 524.212 269.945 502.053 266.881 480.742C254.807 485.592 242.513 490.679 230 496C269.01 358.746 340.677 297.746 445 265Z" fill="black" stroke="black" stroke-width="12" stroke-linecap="round" stroke-linejoin="round"/></g>    </g><g id="notion-avatar-accessories">      <g id="Accessories/ 14"><g id="Group"><path id="Path" d="M287.695 658.293C276.76 647.358 276.76 629.63 287.695 618.695C298.63 607.76 316.358 607.76 327.293 618.695C337.267 628.669 338.143 644.297 329.921 655.264L362.083 687.426C366.925 692.268 366.925 700.119 362.083 704.962C357.24 709.804 349.389 709.804 344.547 704.962L306.04 666.456C299.371 666.111 292.792 663.389 287.695 658.293Z" fill="white" stroke="black" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/><rect id="Rectangle" width="8" height="16" rx="4" transform="matrix(-0.707107 0.707107 0.707107 0.707107 295.615 623.221)" fill="black"/></g></g>    </g><g id="notion-avatar-details">      <!--?xml version="1.0" encoding="UTF-8"?-->    <title>Details/ 0</title>    <g id="Details/-0" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"/>    </g><g id="notion-avatar-beard">      <!--?xml version="1.0" encoding="UTF-8"?-->    <title>Beard/ 0</title>    <g id="Beard/-0" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"/>    </g>      </g>      
</svg>



)
export default Logo
