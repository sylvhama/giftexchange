import css from './button.css';

export default function Button({caption, color='#00bcd4'}, ...props) {
  let style = '',
      allProps = '';
  if(color !== '') style = `style="color: ${color}"`; 
  props.forEach((prop) => {
    Object.keys(prop).forEach((key) => allProps += ` ${key}="${prop[key]}"`);
  });
  return `
    <button class="button" ${style} ${allProps}>
      <span class="button__caption">
        ${caption}
      </span>
    </button>
  `;
}
