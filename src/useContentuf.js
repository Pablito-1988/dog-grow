import {createClient} from 'contentful';

const useContentful = (bla) => {
    console.log(bla)
    const client= createClient ({
        space : "f5klpei59l37",
        accessToken: "qFP0gtMR5kSIym8b9moI0USNmXys6etjPY2_jDNGTjQ",
        host: "cdn.contentful.com"
    })   
    const getEntries = async () => {
        try{
          const entries = await client.getEntries({
            content_type: `${bla}`,
            select: "fields"
          })
          return entries
        } catch (error) {
            console.log(error)
        }

    }
    return { getEntries}
}
export default useContentful