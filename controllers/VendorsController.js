const { Vendor } = require('../models')()

const getVendors = async (__req, res) => {
    try {
        const vendors = await Vendor.findAll();
        return res.send(vendors);
    } catch (error) {
        console.log(error);
        return res.status(500).send({ message: 'Error al obtener los proveedores' })
    }
}

const getVendorById = async (req, res) => {
    try {
        const { vendorId } = req.params;
        console.log(vendorId);
        const vendor = await Vendor.findOne({
            where: {
                vendorId: vendorId,
            }
        })
        console.log(vendor)
        if(!vendor) {
            return res.status(404).json({message: 'Error al encontrar el proveedor'});
        }
        return res.send(vendor)
    } catch (error) {
        console.log(error);
        return null;
    }
}

const create = async (req, res) => {
    try {
        const vendor = await Vendor.create(req.body);
        return res.send({ message: 'Usuario creado existosamente', data: vendor });
    } catch (error) {
        return res.status(500).json({ message: 'Error al crear el usuario' });
    }
}

const update = async (req, res) => {
    try {
        const { vendorId } = req.params;

        const vendor = await Vendor.findOne({ where: { vendorId: vendorId } })
        console.log(vendor)

        if (!vendor) {
            return res.status(404).json({ message: 'Error al encontrar el usuario' });
        }
        return res.send({ message: 'Usuario actualizado existosamente', data: req.body });
    } catch (error) {
        return res.status(500).send({ message: 'Error al crear el proveedor' });
    }
}

// const deleteVendor = async (req, res) => {
//     try {
//         const { VendorId } = req.params;
//         const Vendor = await Vendor.findOne({ where: { VendorId: VendorId } })

//         if (!Vendor) {
//             return res.status(404).json({ message: 'Error al encontrar el usuario' });
//         }
//         await Vendor.destroy({where: {VendorId: VendorId}})
//         return res.status(201).send({message: 'Usuario eliminado'})

//     } catch (error) {
//         return res.status(500).send({ message: 'Error al eliminar el usuario' });
//     }
// }

module.exports = {
    // login,
    getVendors,
    create,
    getVendorById,
    update
};