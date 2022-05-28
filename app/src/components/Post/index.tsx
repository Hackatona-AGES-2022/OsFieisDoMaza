import IPost from '../../interfaces/IPost';
import './styles.css';

export function Post({ title, description }: IPost) {
  return (
    <li>
      <h2>{title}</h2>
      <p>{description}</p>
    </li>
  );
}
