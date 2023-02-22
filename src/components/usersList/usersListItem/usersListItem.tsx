
interface Props {
    user: {
        id: number;
        name: string;
        username: string;
        email: string;
        address: {
            street: string;
            suite: string;
            city: string;
            zipcode: string;
            geo: {
                lat: string;
                lng: string;
            };
        };
        phone: string;
        website: string;
        company: {
            name: string;
            catchPhrase: string;
            bs: string
        };
    }
}

export const UsersListItem = ({ user }: Props) => {
    const { name, username: nick, email } = user
    return (
        <li>
            <p>Имя: {name}</p>
            <p>Ник: {nick}</p>
            <p>Почта: {email}</p>
            <div>
                <button>Пости</button>
                <button>Альбоми</button>
            </div>
        </li>
    )
}