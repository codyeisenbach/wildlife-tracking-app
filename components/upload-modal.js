import {
    Button,
    Header,
    Image,
    Modal,
    ModalHeader,
    ModalContent,
    ModalDescription,
    ModalActions,
    TextArea,
    Progress
} from 'semantic-ui-react'

export default ({ open, img, val, onDescription, onPost, percent, loading }) => (
    <Modal open={open} dimmer >
        <Progress active attached="top" percent={percent} indicating />
        <ModalHeader>Upload Photo</ModalHeader>
        <ModalContent image>
            <Image wrapped size='large' src={img} disabled={loading} />
            <ModalDescription style={{ width: '50%', height: '50%' }}>
                <Header>Description</Header>
                <TextArea
                    autoHeight
                    style={{ width: '50%', height: '50%' }}
                    placeholder='Tell us more'
                    rows={5}
                    disabled={loading}
                    value={val}
                    onChange={onDescription} />
            </ModalDescription>
        </ModalContent>
        <ModalActions>
            <Button
                primary
                size="large"
                content="Post"
                onClick={onPost}
                loading={loading} />
        </ModalActions>
    </Modal>
)
