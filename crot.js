import Gen from './rasyType'

const Crot = {

    Nganu: {
        count: 0,
        refs: {},
    },
    in: (Effectstate, callback) => {
        if (Gen(Effectstate) === 'string' && Gen(callback) === 'function') {
            Crot.Nganu.count++
            const eventId = 'l' + Crot.Nganu.count
            Crot.Nganu.refs[eventId] = {
                name: Effectstate,
                callback,
            }
            return eventId
        }
        return false
    },
    out: (Effectstate, data) => {
        Object.keys(Crot.Nganu.refs).forEach(_id => {
            if (
                Crot.Nganu.refs[_id] &&
                Effectstate === Crot.Nganu.refs[_id].name
            )
                Crot.Nganu.refs[_id].callback(data)
        })
    }

}

export default Crot 
