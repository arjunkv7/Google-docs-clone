import { DocumentModel } from '../models/index';

export let updateOrInsertDocument = async (documentId: string, data: object, userName: string) => {
    try {
        if (documentId == null || documentId == '') return;
        console.log(data, documentId, userName)

        let document = await DocumentModel.findOneAndUpdate({ documentId }, { data });
        if (document == null) {
            document = await DocumentModel.create({
                documentId,
                editors: [userName],
                creator: userName
            });
        }

        return document;
    } catch (error) {
        throw (error);
    }

}

export let getDocument = async (documentId: string, userName: string) => {
    if (documentId == null || documentId == '') return '';
    if (userName == null || userName == "") return '';

    let document = await DocumentModel
        .findOne({
            documentId,
            editors: {
                $in: userName
            }
        })
        .select({ data: 1, _id: 0 });

    if (!document) return "";

    return document;
}
