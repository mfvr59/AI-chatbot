import Image from 'next/image';

function ChatHeader() {
    return (
        <div style={{ display: 'flex', alignItems: 'center', padding: '10px' }}>
            <Image src="/path/to/character-image.png" alt="Chatbot Character" width={50} height={50} />
            <h1 style={{ marginLeft: '10px' }}>Chatbot</h1>
        </div>
    );
}
