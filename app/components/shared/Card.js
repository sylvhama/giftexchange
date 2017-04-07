import css from './card.css';

export default function Card(content, header = '') {
  let cardHeader = '';
  if(header !== '') cardHeader = `
    <div class="card__header">
      ${header}
    </div>
  `;
  return `
    <article class="card">
      ${cardHeader}
      <div class="card__content">
        ${content}
      </div>
    </article>
  `;
}
