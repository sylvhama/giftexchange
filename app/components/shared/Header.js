import css from './header.css';

export default function Header({title = '', heading = 1, colored = false}) {
  return `
    <header class="header ${colored ? 'header--colored' : ''}">
      <h${heading} class="header__title">
        ${title}
      </h${heading}>
    </header>
  `;
}
