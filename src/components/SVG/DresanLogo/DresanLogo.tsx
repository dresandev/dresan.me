import { SVGProps } from 'react'
import styles from './DresanLogo.module.css'

export const DresanLogo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    className={styles.logo}
    xmlns='http://www.w3.org/2000/svg'
    width={139}
    height={30}
    {...props}
  >
    <path
      d='M.251 7.782c-.369.367-.299.598 0 1.03l5.143 5.142c.54.49.884.57 1.543.514l19.544-7.2-5.144 11.83-3.6-4.115c-.744-.206-1.17-.291-2.057 0L9.508 17.04c-.79.316-.785.558-.514 1.029l10.8 10.8c2.612 1.57 4.075 1.6 6.687-.514l7.714-16.972c.182-1.881.03-3.016-.514-5.143L27.553.29c-1.075-.356-3.786-.42-5.144 0L.251 7.782Z'
    />
    <path
      className={styles.letters}
      fillRule='evenodd'
      d='M54.204 23.348V1.828l-5.738-.578v7.289c-.907-.81-2.028-1.215-3.361-1.215-1.275 0-2.405.357-3.39 1.07-.966.694-1.72 1.668-2.26 2.921-.542 1.235-.812 2.642-.812 4.223 0 2.623.493 4.676 1.478 6.16.985 1.486 2.453 2.228 4.404 2.228 1.817 0 3.275-.723 4.376-2.17l.203 1.592h5.1Zm-5.738-4.889c-.521.907-1.188 1.36-1.999 1.36-.618 0-1.101-.28-1.449-.839-.328-.559-.492-1.687-.492-3.384 0-1.465.202-2.526.608-3.181.406-.675.947-1.013 1.623-1.013.328 0 .628.077.898.232.27.134.541.347.811.636v6.19ZM67.58 7.671a5.115 5.115 0 0 0-1.565-.26c-.85 0-1.633.308-2.347.925-.715.617-1.237 1.437-1.565 2.459l-.464-2.893h-5.013v15.446h5.738v-7.029c.25-1.118.58-1.957.985-2.516.425-.56 1.062-.839 1.913-.839.424 0 .898.077 1.42.231l.898-5.524Zm14.514 9.574c.077-.733.116-1.34.116-1.823 0-1.696-.319-3.152-.956-4.367-.619-1.215-1.498-2.14-2.637-2.777-1.14-.636-2.473-.954-4-.954-1.641 0-3.042.376-4.201 1.128-1.16.733-2.038 1.735-2.637 3.008-.58 1.253-.87 2.651-.87 4.194 0 2.487.706 4.493 2.116 6.016 1.41 1.504 3.487 2.256 6.23 2.256 2.376 0 4.501-.761 6.375-2.285l-2.318-3.124c-.676.463-1.294.81-1.855 1.042-.56.212-1.11.318-1.651.318-.927 0-1.642-.174-2.144-.52-.484-.367-.802-1.071-.957-2.112h9.389Zm-5.97-5.554c.27.502.416 1.206.435 2.112v.202h-3.883c.097-1.157.3-1.957.609-2.4.328-.444.811-.666 1.449-.666.676 0 1.14.251 1.39.752ZM93.24 7.873a9.81 9.81 0 0 0-3.275-.55c-1.41 0-2.627.223-3.65.666-1.005.444-1.778 1.041-2.319 1.793a4.36 4.36 0 0 0-.782 2.546c0 2.449 1.497 4.117 4.491 5.003.966.29 1.642.512 2.029.666.386.135.637.28.753.434.135.135.203.337.203.607 0 .308-.145.55-.435.723-.27.154-.666.232-1.188.232a5.658 5.658 0 0 1-2.057-.405 8.133 8.133 0 0 1-1.884-1.129l-2.724 3.009c.812.771 1.806 1.378 2.985 1.822a11.38 11.38 0 0 0 3.825.636c1.41 0 2.666-.222 3.767-.665 1.12-.444 1.99-1.07 2.608-1.88.638-.81.956-1.736.956-2.777 0-1.35-.377-2.39-1.13-3.124-.734-.752-1.874-1.369-3.42-1.85-.965-.29-1.67-.521-2.115-.695-.425-.193-.695-.347-.811-.463a.729.729 0 0 1-.174-.491c0-.463.435-.694 1.304-.694.618 0 1.246.105 1.884.318a7.542 7.542 0 0 1 1.796.81l2.029-3.095c-.715-.617-1.604-1.1-2.666-1.447Zm18.122 11.686c-.135-.27-.203-.675-.203-1.215v-5.322c0-1.928-.55-3.355-1.651-4.28-1.101-.946-2.869-1.418-5.303-1.418-.908 0-1.922.106-3.043.318a16.288 16.288 0 0 0-3.071.897l1.246 3.644c.753-.25 1.487-.443 2.202-.578.734-.155 1.333-.232 1.797-.232.869 0 1.458.135 1.767.405.309.27.464.79.464 1.562v.376h-1.101c-2.434 0-4.289.453-5.564 1.36-1.275.906-1.912 2.217-1.912 3.933 0 1.446.463 2.632 1.39 3.558.947.906 2.183 1.36 3.71 1.36 2.105 0 3.66-.753 4.665-2.257.425.714.966 1.234 1.623 1.562.656.309 1.506.501 2.55.578l1.159-3.673c-.348-.135-.59-.328-.725-.578Zm-6.549.086c-.289.174-.608.26-.956.26-.386 0-.695-.125-.927-.375-.232-.27-.348-.627-.348-1.07 0-.598.193-1.042.58-1.331.386-.29.985-.434 1.796-.434h.609v2.285c-.193.27-.445.492-.754.665Z'
      clipRule='evenodd'
    />
    <path
      className={styles.letters}
      d='M123.845 7.324c1.295 0 2.309.405 3.043 1.215.753.81 1.13 1.947 1.13 3.413V30h-5.738V12.993c0-.579-.077-.974-.231-1.186-.136-.212-.348-.318-.638-.318-.637 0-1.284.51-1.941 1.533v10.326h-5.738V7.902h5.013l.406 1.591c.715-.752 1.439-1.301 2.173-1.648.754-.348 1.594-.521 2.521-.521Z'
    />
  </svg>
)