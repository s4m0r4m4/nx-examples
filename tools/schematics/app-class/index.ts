import { strings } from '@angular-devkit/core';
import { apply, mergeWith, move, Rule, SchematicContext, template, Tree, url } from '@angular-devkit/schematics';

export default function aimClass(_options: any): Rule {
    return (cTree: Tree, _context: SchematicContext) => {

        // Get access to the files directory
        const sourceTemplates = url('./files');

        const sourceParametrizedTemplates = apply(sourceTemplates,
            [
                template({
                    name: _options.name,
                    classify: strings.classify
                })
            ]);

        return mergeWith(sourceParametrizedTemplates)(cTree, _context);

    };
}
